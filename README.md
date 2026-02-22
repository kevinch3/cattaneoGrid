# cattaneoGrid

Grid view of Hernán Cattaneo's podcast episodes, sortable and color-coded by metadata (likes, downloads, date, episode number).

## Structure

```
cattaneoGrid/
├── crawler/     Scrapy spider — scrapes podcast.hernancattaneo.com
├── app/         Angular 21 SPA — displays the episode grid
├── data/
│   └── db.json  Source of truth — committed, updated by CI after each crawl
└── Makefile     Top-level dev commands
```

## Data flow

```
crawler/ → data/db.json (committed) → app/src/assets/db.json (CI copy) → Angular build → gh-pages
```

`app/src/assets/db.json` is never committed; it is generated at build time.

## Local development

**Prerequisites:** Python 3.12+, Node 22+

```bash
# First-time setup: create crawler venv and install Python deps
make install

# Crawl (incremental) → updates data/db.json
make crawl

# Build app (copies data/db.json → app/src/assets/db.json, then ng build)
make build

# Serve app locally
cd app && npm start

# Deploy to GitHub Pages
make deploy
```

## CI

| Workflow | Trigger | What it does |
|---|---|---|
| `scrape.yml` | Weekly (Sun 23:30 UTC) or manual | Crawl → commit `data/db.json` → build → deploy |
| `deploy.yml` | Push to `app/src/**` or manual | Build → deploy (uses existing `data/db.json`) |
