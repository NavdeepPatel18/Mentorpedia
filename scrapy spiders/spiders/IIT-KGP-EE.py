import scrapy
from mentor_pedia.items import MentorPediaItem  # importing items file for storing data in json

# IIT-Kharagpur Electrical department
class IIT_KGP_EE(scrapy.Spider):
    # ==== Required Variables: ==== #

    name = 'IIT-KGP-EE'  # Name of spider

    # The allowed domain and the URLs where the spider should start crawling:
    allowed_domains = ["iitkgp.ac.in"]
    start_urls = ['http://www.iitkgp.ac.in/department/EE/faculties']

    # ==== Functions: ==== #
    def parse(self, response):
        all_faculty = response.css(".col-lg-12")
        all_faculty = all_faculty[1:]
        for faculty in all_faculty:
            name = faculty.css(".row h3::text").extract_first()
            position = faculty.css(".row span ::text").extract()
            position = [item for item in position if not item.isspace()]
            position_filtered = []
            for i in position:
                position_filtered.append(" ".join(i.replace("\xa0", "").split()))
            researchAreas = faculty.css(".blockquote li::text").extract()

            image = faculty.css(".row img").xpath("@src").extract()

            faculty_url = faculty.css("a::attr(href)").extract_first()
            faculty_full_url = response.urljoin(faculty_url)
            faculty_full_url = faculty_full_url.split(';')[0]
            yield scrapy.Request(faculty_full_url, callback=self.get_details,
                                 meta={"name": name, "position": position_filtered, "research_areas": researchAreas,
                                       "image_url": image})

    def get_details(self, response):
        item = MentorPediaItem()
        # Name ====
        item['name'] = response.meta["name"]
        # Position ====
        item['position'] = response.meta["position"]
        # College, Dept. ====
        item['college'] = "IIT-Kharagpur"
        item['dept'] = "Electrical department"
        # Research Areas ====
        research_areas = response.meta["research_areas"]
        research_areas_filtered = []
        for _ in research_areas:
            research_areas_filtered.append(_.replace("\xa0", ""))

        item["research_areas"] = research_areas_filtered
        # Email,phone ====
        contact = response.css("#collapsethree li::text").extract()
        cont = []
        for _ in contact:
            cont.append(_.replace("\n", "").replace("\t", "").replace(" ", "").replace("\xa0", ""))
        if len(cont) == 2:
            item['email'] = cont[0]
            item['phone'] = cont[1]
        elif len(cont) == 1:
            item['email'] = cont[0]
            item['phone'] = ""
        if len(cont) == 0:
            item['email'] = ""
            item['phone'] = ""
        # Website ====
        website = response.css(".facultyleftTabScroll h4 a::attr(href)").extract()
        if len(website) == 2:
            item['website'] = website[1]
        elif len(website) == 1:
            if "/cv" in website[0]:
                filtered_website = "http://www.iitkgp.ac.in/".join(website[0])
                item['website'] = filtered_website
            else:
                item['website'] = website[0]
        elif len(website) == 0:
            item["website"] = ""
        else:
            item['website'] = ""
        # Image ====
        item['image'] = response.meta['image_url']

        yield item