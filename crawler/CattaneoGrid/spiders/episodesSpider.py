import json
import logging
import re
from pathlib import Path
from urllib.parse import urljoin

import scrapy
from bs4 import BeautifulSoup
from dateutil.parser import parse
from scrapy.exceptions import CloseSpider
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
    last_page = 68
    resume_mode = False

    def __init__(self, order="desc", return_html="false", resume_from=None, **kwargs):
        super().__init__(**kwargs)
        self.ascending = str(order).lower() in {"asc", "ascending", "oldest", "old"}
        self.return_html = str(return_html).lower() in {"1", "true", "t", "yes", "y", "on"}
        self.manual_resume = str(resume_from) if resume_from not in (None, "", "None") else None
        self.resume_boundary = None

    def start_requests(self):
        if self.resume_mode:
            self.resume_boundary = self.manual_resume or self._derive_resume_boundary()
            if self.resume_boundary:
                self.logger.info("Resume boundary set to episode %s", self.resume_boundary)
            else:
                self.logger.info("No resume boundary found; crawling full catalogue.")

        pages = range(self.start_page, self.last_page + 1)
        if self.ascending:
            pages = reversed(list(pages))

        base_url = "https://podcast.hernancattaneo.com/page/"
        for page_number in pages:
            yield scrapy.Request(url=f"{base_url}{page_number}/", callback=self.parse)

    def parse(self, response):
        for card in response.css(".card"):
            download_page_link = card.css('a.bg-transparent[title="Download"]::attr(href)').get()
            titulo = card.css(".card-body .card-title a::text").get()
            episode_id = self.extract_episode(titulo)

            item = CattaneogridItem()
            item["episodio"] = episode_id
            item["titulo"] = titulo

            text_fragments = card.css(".episode-description").getall()
            item["descripcion"] = (
                None if not text_fragments else self.html_to_text(" ".join(text_fragments).strip(), self.return_html)
            )
            item["likes"] = card.css('button[title="Likes"] span:last-child::text').get()
            item["descargas"] = card.css('a.bg-transparent[title="Download"] span:last-child::text').get()
            item["fecha"] = self.extract_date(titulo)

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
        if self.resume_mode and self.resume_boundary and episodio == self.resume_boundary:
            logger.info("Resume boundary reached at episode %s; stopping crawl.", episodio)
            raise CloseSpider("resume_complete")

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
        date_match = re.search(
            r"(\bJanuary\b|\bFebruary\b|\bMarch\b|\bApril\b|\bMay\b|\bJune\b|\bJuly\b|\bAugust\b|\bSeptember\b|\bOctober\b|\bNovember\b|\bDecember\b|\bJan\b|\bFeb\b|\bMar\b|\bApr\b|\bMay\b|\bJun\b|\bJul\b|\bAug\b|\bSep\b|\bOct\b|\bNov\b|\bDec\b)\s\d{1,2}(st|nd|rd|th)?\s\d{4}",
            title,
            re.IGNORECASE,
        )
        if date_match:
            date_str = date_match.group()
            return parse(date_str).strftime("%Y-%m-%d")
        return None

    def extract_episode(self, title):
        episode_match = re.search(r"Episode\s(\d+)", title or "")
        return episode_match.group(1) if episode_match else None

    def html_to_text(self, html, return_html):
        if return_html:
            return html
        html = html.replace("<br>", "\n").replace("<br/>", "\n").replace("<br />", "\n")
        soup = BeautifulSoup(html, "html.parser")
        text_parts = soup.stripped_strings
        description_text = " ".join(text_parts)
        description_text = re.sub(" +", " ", description_text)
        return description_text

    def _derive_resume_boundary(self):
        output_path = self._output_path()
        if not output_path.exists():
            return None
        try:
            records = json.loads(output_path.read_text(encoding="utf-8"))
            if records:
                return records[0].get("episodio")
        except Exception:
            self.logger.warning("Unable to read existing output file %s", output_path, exc_info=True)
        return None

    def _output_path(self):
        return Path(self.settings.get("OUTPUT_JSON_PATH", "output/db.json"))


class PodcastSpider(BasePodcastSpider):
    """Default incremental crawl (resume until encountering existing episodes)."""

    name = "podcastspider"
    resume_mode = True


class PodcastSpiderFull(BasePodcastSpider):
    """Always crawls the complete catalogue."""

    name = "podcastspider_full"
    resume_mode = False
