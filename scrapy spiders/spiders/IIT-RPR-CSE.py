import scrapy
from mentor_pedia.items import MentorPediaItem  # importing items file for storing data in json

# IIT-Ropar Computer Science Engineering
class IIT_RPR_CSE(scrapy.Spider):
    # ==== Required Variables: ==== #

    name = 'IIT-RPR-CSE'  # Name of spider

    # The allowed domain and the URLs where the spider should start crawling:
    allowed_domains = ["cse.iitrpr.ac.in"]
    start_urls = ['http://cse.iitrpr.ac.in/people/faculties-cse']

    # ==== Functions: ==== #
    def parse(self, response):
        all_faculty = response.css(".fac_row")
        for faculty in all_faculty:
            # yield {"faculty":faculty.extract()}
            item = MentorPediaItem()
            image = faculty.css("img ::attr(src)").extract_first()
            image = "http://cse.iitrpr.ac.in" + image
            name = faculty.css("strong a ::text").extract_first()
            name.replace(" (On Leave) ", "")
            website = faculty.css("a ::attr(href)").extract()
            website = website[1]
            #
            research_areas = faculty.css("p ::text").extract()
            research_areas = research_areas[-1].replace(":  ", "").split(",")
            email = faculty.css("p ::text").extract()
            email = [k for k in email if "@iitrpr.ac.in" in k][0].replace(": ","")
            # phone = faculty.css("span+span ::text").extract_first()
            # item["name"] = name
            #
            if name is not None:
                item["name"] = name
                item["research_areas"] = research_areas
                item["website"] = website
                item['email'] = email
            #     item["phone"] = phone
            #     item["position"] = position
                item["image"] = image
                item["college"] = "IIT-Ropar"
                item["dept"] = "CSE department"
                yield item