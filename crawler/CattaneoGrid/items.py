
import scrapy

class CattaneogridItem(scrapy.Item):
    # define the fields for your item here like:
    titulo = scrapy.Field()
    descripcion = scrapy.Field()
    link = scrapy.Field()
    likes = scrapy.Field()
    descargas = scrapy.Field()
    fecha = scrapy.Field()
    episodio = scrapy.Field()
    tracklist = scrapy.Field()
    stats_only = scrapy.Field()  # internal pipeline signal; never written to JSON
