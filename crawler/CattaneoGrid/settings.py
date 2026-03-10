BOT_NAME = "CattaneoGrid"

USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.85 Safari/537.36"
DOWNLOAD_DELAY = 0.5
CONCURRENT_REQUESTS = 8
LOG_LEVEL = 'DEBUG'
COOKIES_ENABLED = False
RETRY_ENABLED = True
RETRY_TIMES = 2

SPIDER_MODULES = ["CattaneoGrid.spiders"]
NEWSPIDER_MODULE = "CattaneoGrid.spiders"

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# Set settings whose default value is deprecated to a future-proof value
REQUEST_FINGERPRINTER_IMPLEMENTATION = "2.7"
TWISTED_REACTOR = "twisted.internet.asyncioreactor.AsyncioSelectorReactor"
FEED_EXPORT_ENCODING = "utf-8"
OUTPUT_JSON_PATH = "../data/db.json"
ITEM_PIPELINES = {
    "CattaneoGrid.pipelines.TracklistNormalizerPipeline": 200,
    "CattaneoGrid.pipelines.JsonArrayWriterPipeline": 300,
}

TELNETCONSOLE_ENABLED = False
