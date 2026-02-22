SHELL := /bin/bash

.PHONY: crawl crawl-full build deploy

## Run incremental crawl → writes data/db.json
crawl:
	cd crawler && make crawl

## Run full crawl → writes data/db.json
crawl-full:
	cd crawler && make crawl-full

## Copy db.json to app assets and build the Angular app
build:
	cp data/db.json app/src/assets/db.json
	cd app && npm run build

## Copy db.json to app assets and deploy to GitHub Pages
deploy:
	cp data/db.json app/src/assets/db.json
	cd app && npm run deploy:gh
