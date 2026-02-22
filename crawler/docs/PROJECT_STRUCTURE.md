# Project responsibilities

## Core crawler (production path)

Location: `CattaneoGrid/` package + `scrapy.cfg`

Responsibilities:
- Crawl `podcast.hernancattaneo.com`.
- Normalize episode fields.
- Persist canonical feed to `output/db.json`.

Rules:
- No experimental logic in the Scrapy package.
- Keep dependencies minimal and crawler-focused (`requirements.txt`).

## Operational scripts (support path)

Location: `scripts/`

Responsibilities:
- Repeatable, deterministic maintenance tasks used by crawler operations.
- Example: `scripts/data/merge_db.py`.

Rules:
- Scripts should accept CLI arguments.
- Scripts should not import side-project-only dependencies unless documented.

## Side projects (exploration path)

Location: `side_projects/`

Responsibilities:
- Exploratory, optional, and potentially unstable workflows.
- Example: local LLM tracklist formatting and MP3 download helpers.

Rules:
- Keep side-project dependencies in `requirements-side-projects.txt`.
- Side-project failures should not block crawler operation.

## Data outputs

- `output/`: crawler-generated artifacts.
- Long-lived canonical file: `output/db.json`.
- Backups and temporary files remain in the same directory for traceability.
