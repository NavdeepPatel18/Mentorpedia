import scrapy
from mentor_pedia.items import MentorPediaItem  # importing items file for storing data in json

# IIT-Roorkee Computer Science Engineering
class IIT_R_CSE(scrapy.Spider):
    # ==== Required Variables: ==== #

    name = 'IIT-R-CSE'  # Name of spider

    # The allowed domain and the URLs where the spider should start crawling:
    allowed_domains = ["iitr.ac.in"]
    start_urls = ['https://www.iitr.ac.in/departments/CSE/pages/People+Faculty_List.html']

    # ==== Functions: ==== #
    def parse(self, response):
        all_faculty = response.css(".list-wrapper")
        for faculty in all_faculty:
            item = MentorPediaItem()
            image = faculty.css("img ::attr(src)").extract_first()
            name = faculty.css(".detail > div a ::text").extract_first()
            website = faculty.css(".detail > div a ::attr(href)").extract_first()
            website = "https://www.iitr.ac.in" + website

            position = faculty.css(".detail div:nth-child(2) ::text").extract()
            position = [k for k in position if "Website" not in k][0]

            research_areas = faculty.css("p ::text").extract_first()
            if research_areas is not None:
                research_areas = research_areas.split(",")
                research_areas = [k for k in research_areas if not k.isspace()]
            email = faculty.css(".detail span:nth-child(1) ::text").extract_first()
            phone = faculty.css("span+span ::text").extract_first()
            item["name"] = name

            if name is not None:
                item["name"] = name
                item["research_areas"] = research_areas
                item["website"] = website
                item['email'] = email
                item["phone"] = phone
                item["position"] = position
                item["image"] = image
                item["college"] = "IIT-R"
                item["dept"] = "CSE department"
                yield item