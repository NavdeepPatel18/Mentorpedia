# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class MentorPediaItem(scrapy.Item):
    name = scrapy.Field()
    position = scrapy.Field()
    college = scrapy.Field()
    dept = scrapy.Field()
    research_areas = scrapy.Field()
    email = scrapy.Field()
    phone = scrapy.Field()
    website = scrapy.Field()
    image = scrapy.Field()

    # define the fields for your item here like:
    # link = scrapy.Field()
    # image_url = scrapy.Field()
    # temp = scrapy.Field()

    # rank = scrapy.Field()
    # name = scrapy.Field()
    # phone = scrapy.Field()
    # email = scrapy.Field()
    # contact = scrapy.Field()
    # bio_sketch = scrapy.Field()
