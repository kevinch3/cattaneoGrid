"""Sync db.json from the podcast site's JSON API (the one its own frontend uses).

Fetches every episode with live likes/downloads in ~82 small JSON requests,
refreshes stats on existing records and appends new episodes. Curated fields
(tracklist, descripcion) on existing records are never overwritten.

Usage (from crawler/ with venv active):
    python scripts/data/sync_db.py
    python scripts/data/sync_db.py --db path/to/db.json --dry-run
"""

import argparse
import json
import re
import string
import sys
import time
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime, timedelta, timezone
from pathlib import Path

# Make the CattaneoGrid package importable when run from crawler/
sys.path.insert(0, str(Path(__file__).parent.parent.parent))
from CattaneoGrid.parsing import extract_date, extract_episode, html_to_text
from CattaneoGrid.tracklist_extractor import extract_tracklist

DB_PATH = Path(__file__).parent.parent.parent.parent / "data" / "db.json"
SITE = "https://podcast.hernancattaneo.com"
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_3) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/121.0.6167.85 Safari/537.36"
)
WORKERS = 6
RETRIES = 2
# Episodes publish on Buenos Aires time (UTC-3, no DST)
ART = timezone(timedelta(hours=-3))


def fetch(url, accept="application/json"):
    for attempt in range(RETRIES + 1):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT, "Accept": accept})
            with urllib.request.urlopen(req, timeout=30) as resp:
                return resp.read().decode("utf-8")
        except OSError:
            if attempt == RETRIES:
                raise
            time.sleep(1 + attempt)


def api_params():
    """Read the per-render API signature (t, clientSignature) from the home page."""
    html = fetch(SITE + "/", accept="text/html")
    m = re.search(r'window\.__INITIAL_STATE__=("(?:[^"\\]|\\.)*")', html)
    if not m:
        raise RuntimeError("__INITIAL_STATE__ not found on home page")
    params = json.loads(json.loads(m.group(1)))["store"]["apiCommonParams"]
    return {k: v for k, v in params.items() if v is not None}


def fetch_page(params, page):
    query = urllib.parse.urlencode({**params, "type": "all", "value": "", "page": page})
    data = json.loads(fetch(f"{SITE}/user-site/episodes?{query}"))
    if "episodes" not in data:
        raise RuntimeError(f"Page {page}: unexpected API response {list(data)}")
    return data


def fetch_all_episodes():
    params = api_params()
    first = fetch_page(params, 1)
    total_pages, total_count = first["totalPage"], first["totalCount"]
    with ThreadPoolExecutor(WORKERS) as pool:
        rest = list(pool.map(lambda p: fetch_page(params, p), range(2, total_pages + 1)))
    episodes = [ep for page in [first, *rest] for ep in page["episodes"]]
    if len(episodes) != total_count:
        raise RuntimeError(f"Fetched {len(episodes)} episodes, API reports {total_count}")
    return episodes, total_pages


def to_record(ep):
    title = ep["title"]
    descripcion = html_to_text(ep.get("previewContent") or "") or None
    fecha = extract_date(title)
    if not fecha and ep.get("publishTimestamp"):
        fecha = datetime.fromtimestamp(ep["publishTimestamp"], ART).strftime("%Y-%m-%d")
    link = ep.get("mediaUrl")
    if link:
        # Same file; db.json has always stored the download variant
        link = link.replace("/mf/web/", "/mf/download/")
    return {
        "episodio": extract_episode(title),
        "titulo": title,
        "likes": str(ep["likedCount"]),
        "descargas": str(ep["downloadCount"]),
        "fecha": fecha,
        "descripcion": descripcion,
        "link": link,
        "tracklist": extract_tracklist(descripcion),
    }


def next_letter_id(used):
    """Next unused letter ID (A–Z, then AA, AB, …) for episodes without a number."""
    for letter in string.ascii_uppercase:
        if letter not in used:
            return letter
    for l1 in string.ascii_uppercase:
        for l2 in string.ascii_uppercase:
            if l1 + l2 not in used:
                return l1 + l2
    return None


def merge(existing, api_records):
    """Return (new records first + existing records in their original order, new ids, stats-changed count).

    Existing records keep their position so the committed diff only shows real changes.
    """
    by_title = {r["titulo"]: i for i, r in enumerate(existing) if r.get("titulo")}
    by_id = {str(r["episodio"]): i for i, r in enumerate(existing) if r.get("episodio") is not None}
    letter_ids = {k for k in by_id if re.fullmatch(r"[A-Z]+", k)}

    api_titles = {rec["titulo"] for rec in api_records}

    updated = list(existing)
    new_records, seen, changed = [], set(), 0
    for rec in api_records:
        idx = by_title.get(rec["titulo"])
        if idx is None and rec["episodio"] is not None:
            # Fall back to the number only for renamed episodes; otherwise split
            # parts like "Episode 001.2" would collide with "Episode 001.1"
            idx = by_id.get(rec["episodio"])
            if idx is not None and existing[idx].get("titulo") in api_titles:
                idx = None
        if idx is not None:
            if idx in seen:
                continue
            seen.add(idx)
            old = existing[idx]
            changed += (old.get("likes"), old.get("descargas")) != (rec["likes"], rec["descargas"])
            updated[idx] = {**old, "likes": rec["likes"], "descargas": rec["descargas"]}
            if not old.get("link"):
                updated[idx]["link"] = rec["link"]
            continue

        if rec["episodio"] is None or rec["episodio"] in by_id:
            part = re.search(r"Episode\s(\d+\.\d+)", rec["titulo"])
            if part and part.group(1) not in by_id:
                rec["episodio"] = part.group(1)
            else:
                rec["episodio"] = next_letter_id(letter_ids)
                letter_ids.add(rec["episodio"])
        by_id[rec["episodio"]] = None
        new_records.append(rec)

    for i, r in enumerate(existing):
        if i not in seen:
            print(f"Warning: episode {r.get('episodio')!r} no longer listed by the site; keeping it", file=sys.stderr)
    return new_records + updated, [r["episodio"] for r in new_records], changed


def main():
    parser = argparse.ArgumentParser(description="Sync db.json from the podcast site's JSON API")
    parser.add_argument("--db", default=str(DB_PATH), help=f"Path to db.json (default: {DB_PATH})")
    parser.add_argument("--dry-run", action="store_true", help="Fetch and report, but don't write")
    args = parser.parse_args()

    db_path = Path(args.db)
    existing = json.loads(db_path.read_text(encoding="utf-8")) if db_path.exists() else []

    started = time.monotonic()
    episodes, pages = fetch_all_episodes()
    merged, added, changed = merge(existing, [to_record(ep) for ep in episodes])

    print(
        f"Fetched {len(episodes)} episodes from {pages} pages in {time.monotonic() - started:.1f}s; "
        f"{len(added)} new {added}, stats changed on {changed}, total {len(merged)}"
    )
    if args.dry_run:
        return

    tmp_path = db_path.with_suffix(db_path.suffix + ".tmp")
    # One record per line, matching what the Scrapy pipeline has always written
    body = ",\n".join(json.dumps(r, ensure_ascii=False) for r in merged)
    tmp_path.write_text(f"[{body}]\n", encoding="utf-8")
    tmp_path.replace(db_path)


if __name__ == "__main__":
    main()
