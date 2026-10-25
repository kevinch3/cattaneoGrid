"""Title/description parsing shared by the Scrapy spider and scripts/data/sync_db.py.

Kept free of Scrapy imports so the standalone sync script can use it.
"""
import re

from bs4 import BeautifulSoup
from dateutil.parser import parse


def extract_date(title):
    # ISO format: "- 2024-05-18"
    m = re.search(r"\b(\d{4}-\d{2}-\d{2})\b", title or "")
    if m:
        return m.group(1)
    # Long/short month name: "Dec 27 2025", "December 27 2025"
    m = re.search(
        r"(\bJanuary\b|\bFebruary\b|\bMarch\b|\bApril\b|\bMay\b|\bJune\b|\bJuly\b|\bAugust\b|\bSeptember\b|\bOctober\b|\bNovember\b|\bDecember\b|\bJan\b|\bFeb\b|\bMar\b|\bApr\b|\bMay\b|\bJun\b|\bJul\b|\bAug\b|\bSep\b|\bOct\b|\bNov\b|\bDec\b)\s\d{1,2}(st|nd|rd|th)?\s\d{4}",
        title or "",
        re.IGNORECASE,
    )
    if m:
        return parse(m.group()).strftime("%Y-%m-%d")
    return None


def extract_episode(title):
    # Standard format: "Resident / Episode 764 / Dec 27 2025"
    m = re.search(r"Episode\s(\d+)", title or "")
    if m:
        return m.group(1)
    # Alternate format: "680 Hernan Cattaneo podcast - 2024-05-18"
    m = re.match(r"^(\d+)\s+Hernan\s+Cattaneo", title or "", re.IGNORECASE)
    if m:
        return m.group(1)
    return None


def html_to_text(html, return_html=False):
    if return_html:
        return html
    html = html.replace("<br>", "\n").replace("<br/>", "\n").replace("<br />", "\n")
    soup = BeautifulSoup(html, "html.parser")
    text_parts = soup.stripped_strings
    description_text = " ".join(text_parts)
    description_text = re.sub(" +", " ", description_text)
    return description_text
