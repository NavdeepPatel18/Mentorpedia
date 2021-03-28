import scrapy
from mentor_pedia.items import MentorPediaItem  # importing items file for storing data in json

# IIT-Hyedarabad Computer Science Engineering
class IIT_H_CSE(scrapy.Spider):
    # ==== Required Variables: ==== #

    name = 'IIT-H-CSE'  # Name of spider

    # The allowed domain and the URLs where the spider should start crawling:
    allowed_domains = ["cse.iith.ac.in"]
    start_urls = ['https://cse.iith.ac.in/people/faculty.html']

    # ==== Functions: ==== #
    def parse(self, response):
        all_faculty = response.css(".faculty-col .row")
        for faculty in all_faculty:
            # yield {"faculty":faculty.extract()}
            item = MentorPediaItem()
            image = faculty.css("img ::attr(src)").extract_first()
            # image.replace("../", "")
            image = image[2:]
            image = "http://cse.iith.ac.in" + image
            name = faculty.css("a ::text").extract_first()
            link = faculty.css("a ::attr(href)").extract()
            website = link[0]
            email = link[1][7:]
            # #
            position = faculty.css("h4::text").extract_first()
            raw_research_areas = faculty.css("h5~h5+h5 ::text").extract()
            research_areas = ''.join(map(str, raw_research_areas)).split(",")

            # research_areas = research_areas[-1].replace(":  ", "").split(",")
            # email = faculty.css("p ::text").extract()
            # email = [k for k in email if "@iitrpr.ac.in" in k][0].replace(": ","")
            # # phone = faculty.css("span+span ::text").extract_first()
            # # item["name"] = name
            # #
            if name is not None:
                item["name"] = name
                item["research_areas"] = research_areas
                item["website"] = website
                item['email'] = email
            #     item["phone"] = phone
                item["position"] = position
                item["image"] = image
                item["college"] = "IIT-Hyedarabad"
                item["dept"] = "CSE department"
                yield item