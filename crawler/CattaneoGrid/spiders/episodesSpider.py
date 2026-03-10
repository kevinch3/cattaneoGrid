import json
import logging
import re
from pathlib import Path
from urllib.parse import urljoin

import scrapy
from bs4 import BeautifulSoup
from dateutil.parser import parse
from scrapy.spidermiddlewares.httperror import HttpError
from twisted.internet.error import DNSLookupError, TimeoutError, TCPTimedOutError

from CattaneoGrid.items import CattaneogridItem

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


class BasePodcastSpider(scrapy.Spider):
    """Shared spider for crawling podcast listings."""

    name = None
    allowed_domains = ["podcast.hernancattaneo.com"]
    start_page = 0
    last_page = 80  # Extended from 68 to potentially capture older episodes (1–94)
    resume_mode = False

    def __init__(self, order="desc", return_html="false", **kwargs):
        super().__init__(**kwargs)
        self.ascending = str(order).lower() in {"asc", "ascending", "oldest", "old"}
        self.return_html = str(return_html).lower() in {"1", "true", "t", "yes", "y", "on"}
        self.existing_episodes: set[str] = set()  # episode IDs already in db
        self.gap_episodes: set[str] = set()       # missing numeric IDs to fill

    def start_requests(self):
        if self.resume_mode:
            self._load_existing_and_gaps()

        pages = range(self.start_page, self.last_page + 1)
        if self.ascending:
            pages = reversed(list(pages))

        base_url = "https://podcast.hernancattaneo.com/page/"
        for page_number in pages:
            yield scrapy.Request(url=f"{base_url}{page_number}/", callback=self.parse)

    def _load_existing_and_gaps(self):
        """Load existing episode IDs and compute gap set for gap-filling mode."""
        output_path = self._output_path()
        if not output_path.exists():
            return
        try:
            records = json.loads(output_path.read_text(encoding="utf-8"))
            for r in records:
                ep = r.get("episodio")
                if ep is not None:
                    self.existing_episodes.add(str(ep))

            numeric_ids = {int(ep) for ep in self.existing_episodes if str(ep).isdigit()}
            if numeric_ids:
                max_ep = max(numeric_ids)
                self.gap_episodes = {
                    str(i) for i in range(1, max_ep + 1) if i not in numeric_ids
                }
                if self.gap_episodes:
                    self.logger.info(
                        "Gap-fill: %d missing episodes in range 1–%d will be captured if found.",
                        len(self.gap_episodes),
                        max_ep,
                    )
        except Exception:
            self.logger.warning(
                "Unable to load existing data for gap analysis.", exc_info=True
            )

    def parse(self, response):
        for card in response.css(".card"):
            download_page_link = card.css('a.bg-transparent[title="Download"]::attr(href)').get()
            titulo = card.css(".card-body .card-title a::text").get()
            episode_id = self.extract_episode(titulo)

            item = CattaneogridItem()
            item["episodio"] = episode_id
            item["titulo"] = titulo
            item["likes"] = card.css('button[title="Likes"] span:last-child::text').get()
            item["descargas"] = card.css('a.bg-transparent[title="Download"] span:last-child::text').get()
            item["fecha"] = self.extract_date(titulo)

            # In resume mode, yield known non-gap episodes as stats-only items so the
            # pipeline can refresh likes/descargas without touching other fields.
            if (
                self.resume_mode
                and episode_id is not None
                and str(episode_id) in self.existing_episodes
                and str(episode_id) not in self.gap_episodes
            ):
                item["stats_only"] = True
                yield item
                continue

            text_fragments = card.css(".episode-description").getall()
            item["descripcion"] = (
                None if not text_fragments else self.html_to_text(" ".join(text_fragments).strip(), self.return_html)
            )

            if download_page_link:
                logger.info("Download page found for %s: %s", episode_id, download_page_link)
                request = scrapy.Request(
                    download_page_link,
                    callback=self.parse_download_page,
                    errback=self.errback_httpbin,
                    meta={"dont_redirect": True},
                    dont_filter=True,
                )
                request.meta["item"] = item
                yield request
            else:
                alt_download_mp3_link = card.css("a.download_link::attr(href)").get()
                if alt_download_mp3_link:
                    item["link"] = alt_download_mp3_link
                    logger.info("Alt download link: %s", alt_download_mp3_link)
                    yield item
                else:
                    logger.info("NOT FOUND: Alt download link for %s", episode_id)
                    yield item

    def parse_download_page(self, response):
        logger.info("parse_download_page response %s", response)
        item = response.meta["item"]
        link = response.css("a.download-btn::attr(href)").get()
        if not link:
            link = response.css('a[href*=".mp3"]::attr(href)').get()
        if not link:
            match = re.search(r"https?://[^\s\"']+\.mp3", response.text)
            if match:
                link = match.group(0)
        if link:
            item["link"] = urljoin(response.url, link)
        else:
            logger.warning("Unable to find download link for episode %s (%s)", item.get("episodio"), response.url)

        episodio = item.get("episodio")

        if self.resume_mode:
            ep_str = str(episodio) if episodio is not None else None

            if ep_str is None:
                # Unknown ID — yield for pipeline to handle deduplication by title
                yield item
            elif ep_str not in self.existing_episodes:
                logger.info("New episode %s — adding to database.", ep_str)
                yield item
            elif ep_str in self.gap_episodes:
                logger.info("Gap episode %s filled.", ep_str)
                yield item
            # else: known non-gap episode — already filtered in parse(); skip silently
        else:
            yield item

    def errback_httpbin(self, failure):
        logger.error(repr(failure))
        if failure.check(HttpError):
            response = failure.value.response
            logger.error("HttpError on %s", response.url)
        elif failure.check(DNSLookupError):
            request = failure.request
            logger.error("DNSLookupError on %s", request.url)
        elif failure.check(TimeoutError, TCPTimedOutError):
            request = failure.request
            logger.error("TimeoutError on %s", request.url)

    def extract_date(self, title):
        # ISO format: "- 2024-05-18"
        m = re.search(r"\b(\d{4}-\d{2}-\d{2})\b", title or "")
        if m:
            return m.group(1)
        # Long/short month name: "Dec 27 2025", "December 27 2025"
        m = re.search(
            r"(\bJanuary\b|\bFebruary\b|\bMarch\b|\bApril\b|\bMay\b|\bJune\b|\bJuly\b|\bAugust\b|\bSeptember\b|\bOctober\b|\bNovember\b|\bDecember\b|\bJan\b|\bFeb\b|\bMar\b|\bApr\b|\bMay\b|\bJun\b|\bJul\b|\bAug\b|\bSep\b|\bOct\b|\bNov\b|\bDec\b)\s\d{1,2}(st|nd|rd|th)?\s\d{4}",
            title,
            re.IGNORECASE,
        )
        if m:
            return parse(m.group()).strftime("%Y-%m-%d")
        return None

    def extract_episode(self, title):
        # Standard format: "Resident / Episode 764 / Dec 27 2025"
        m = re.search(r"Episode\s(\d+)", title or "")
        if m:
            return m.group(1)
        # Alternate format: "680 Hernan Cattaneo podcast - 2024-05-18"
        m = re.match(r"^(\d+)\s+Hernan\s+Cattaneo", title or "", re.IGNORECASE)
        if m:
            return m.group(1)
        return None

    def html_to_text(self, html, return_html):
        if return_html:
            return html
        html = html.replace("<br>", "\n").replace("<br/>", "\n").replace("<br />", "\n")
        soup = BeautifulSoup(html, "html.parser")
        text_parts = soup.stripped_strings
        description_text = " ".join(text_parts)
        description_text = re.sub(" +", " ", description_text)
        return description_text

    def _output_path(self):
        return Path(self.settings.get("OUTPUT_JSON_PATH", "output/db.json"))


class PodcastSpider(BasePodcastSpider):
    """Default incremental crawl: fetches new episodes and fills any known gaps."""

    name = "podcastspider"
    resume_mode = True


class PodcastSpiderFull(BasePodcastSpider):
    """Always crawls the complete catalogue."""

    name = "podcastspider_full"
    resume_mode = False
