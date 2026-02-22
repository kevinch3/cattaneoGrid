# CattaneoGrid Data Crawler

This repository is now organized around one main responsibility:

- **Core responsibility:** crawl the Cattaneo podcast site and produce `output/db.json`.

Everything else (tracklist experiments, MP3 downloads, ad-hoc data utilities) lives outside the Scrapy package in explicit side-project folders.

## Project structure

```text
CattaneoGrid/
  CattaneoGrid/                 # Scrapy project package (core crawler only)
  output/                       # crawler output artifacts
  scripts/
    data/
      merge_db.py               # maintenance utility to merge two JSON snapshots
  side_projects/
    tracklists/                 # LLM/tracklist experimentation scripts
    media_downloader/           # MP3 downloader utility
  docs/
    PROJECT_STRUCTURE.md        # architecture and responsibility boundaries
  Makefile
  requirements.txt              # crawler-only dependencies
  requirements-side-projects.txt
  scrapy.cfg
```

## Quick start (crawler)

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

### Run crawls

```bash
make crawl         # resume mode
make crawl-full    # full rebuild (newest -> oldest)
make crawl-asc     # full rebuild (oldest -> newest)
```

Equivalent raw commands:

```bash
scrapy crawl podcastspider
scrapy crawl podcastspider_full
scrapy crawl podcastspider_full -a order=asc
```

## Data outputs

- `output/db.json`: canonical crawler output.
- `output/db.*.json`: backups created during full crawls.

## Maintenance utility

Merge two JSON files by episode number:

```bash
make merge-db
# or
python scripts/data/merge_db.py --existing output/old_db.json --new output/new_db.json --out output/db.json
```

## Side projects (optional)

Install extra dependencies only if you use these scripts:

```bash
pip install -r requirements-side-projects.txt
```

- `side_projects/tracklists/`: tracklist extraction/formatting experiments.
- `side_projects/media_downloader/download_mp3s.py`: download MP3 files listed in `output/db.json`.

## Automation

GitHub Actions workflow `.github/workflows/scrape.yml` runs weekly and uploads `output/db.json` as an artifact.

## Notes

- Keep crawler-specific code inside `CattaneoGrid/` package.
- Put exploratory scripts in `side_projects/`.
- Put generic operational utilities in `scripts/`.
