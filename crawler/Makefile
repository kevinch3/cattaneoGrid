SHELL := /bin/bash

SCRAPY := .venv/bin/scrapy

.PHONY: crawl crawl-full crawl-asc merge-db install extract-tracklists

install:
	python3 -m venv --clear .venv
	.venv/bin/pip install -r requirements.txt

crawl:
	$(SCRAPY) crawl podcastspider
	.venv/bin/python scripts/data/extract_tracklists.py

crawl-full:
	$(SCRAPY) crawl podcastspider_full

crawl-asc:
	$(SCRAPY) crawl podcastspider_full -a order=asc

merge-db:
	python scripts/data/merge_db.py --existing output/old_db.json --new output/new_db.json --out output/db.json

extract-tracklists:
	.venv/bin/python scripts/data/extract_tracklists.py
