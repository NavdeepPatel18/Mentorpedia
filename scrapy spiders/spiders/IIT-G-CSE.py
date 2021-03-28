import scrapy
from mentor_pedia.items import MentorPediaItem  # importing items file for storing data in json

# IIT-Guwahati Computer Science Engineering
class IIT_G_CSE(scrapy.Spider):
    # ==== Required Variables: ==== #

    name = 'IIT-G-CSE'  # Name of spider

    # The allowed domain and the URLs where the spider should start crawling:
    allowed_domains = ["iitg.ac.in"]
    start_urls = ['http://www.iitg.ac.in/cse/csefaculty']

    # ==== Functions: ==== #
    def parse(self, response):
        all_faculty = response.css("#people tr")
        # yield {"all_faculty":all_faculty}

        # all_faculty = all_faculty[:-22]
        for faculty in all_faculty:
            image = faculty.css("img ::attr(src)").extract_first()
            if image is not None:
                image = "http://www.iitg.ac.in/" + image
            yield {"faculty":image}
            # yield {"faculty":faculty.extract()}
            # item = MentorPediaItem()
            # name = faculty.css("a ::text").extract_first()
            #
            # position = faculty.css(".pic:nth-child(2) p:nth-child(1) ::text").extract()
            # position = [p for p in position if 'Professor' in p]
            # if len(position)!= 0:
            #     position = position[0].replace("\n", "").replace("\t", "").replace("  ", "")
            #
            # image = faculty.css("img ::attr(src)").extract_first()
            # image = " ".join(image)
            # if image is not None:
            #     image = "https://www.cse.iitd.ac.in" + image
            # email = faculty.xpath('//*~[contains(concat( " ", @class, " " ), concat( " ", "pic", " " ))]//*+[contains(concat( " ", @class, " " ), concat( " ", "pic", " " ))]//*[contains(concat( " ", @class, " " ), concat( " ", "pic", " " ))]//p[(((count(preceding-sibling::*) + 1) = 1) and parent::*)]').extract()
            # email = faculty.css(".pic~.pic+.pic p ::text").extract()
            # email = [k for k in email if 'AT' or '@' in k]
            # if len(email) == 0:
            #     email = ""
            # else:
            #     email = email[0].replace(" AT ", "@")
            #
            # phone = faculty.css("p:nth-child(3) ::text").extract_first()
            # phone = phone.replace("\n", "").replace("\t", "").replace(" ", "").replace("\xa0", "")
            # if email is not None:
            #     email = email.replace("\n", "").replace("\t", "").replace("  ", "")
            # if phone is not None:
            #     phone = phone.replace("\n", "").replace("\t", "").replace("  ", "").replace("Tel: ","")
            # phone = " ".join(phone.split(" "))
            # email_processed = []
            #
            # research_areas = faculty.css(".pic:nth-child(2) p+p ::text").extract_first()
            # website = faculty.css("a ::attr(href)").extract_first()
            # if research_areas is not None:
            #     research_areas = research_areas.split(',')
            # if name is not None:
            #     item["college"] = "IIT-D"
            #     item["dept"] = "CSE department"
            #     item["name"] = name
            #     item["image"] = image
            #     item["research_areas"] = research_areas
            #     item["website"] = website
            #     item['email'] = email
            #     item["phone"] = phone
            #     item["position"] = position
            #     yield item