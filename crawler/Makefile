SHELL := /bin/bash

.PHONY: crawl crawl-full crawl-asc merge-db

crawl:
	scrapy crawl podcastspider

crawl-full:
	scrapy crawl podcastspider_full

crawl-asc:
	scrapy crawl podcastspider_full -a order=asc

merge-db:
	python scripts/data/merge_db.py --existing output/old_db.json --new output/new_db.json --out output/db.json
