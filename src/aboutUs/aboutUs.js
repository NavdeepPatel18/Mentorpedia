import Header from "../components/Header";
import Footer from "../components/Footer";
import { Animation } from "../styles/Animation.js";
import { Card } from "@material-ui/core";
function AboutUs(props) {
  return (
    <>
      <Header />

      <main>
        <section
          className="relative row justify-content-center w-full h-full pb-20 pt-12"
          style={{ minHeight: "85vh" }}
        >
          <div
            className="col-sm-12 ml-4 justify-content-center"
            style={{ height: "65vh" }}
          >
            <Animation interval="1000">
              <Card
                className="row"
                style={{
                  width: "80%",
                  marginBottom: "15px",
                  marginLeft: "10%",

                  // to make background
                  backgroundColor: "rgba(33, 92, 152, 0.4)",
                  backgroundImage:
                    "linear-gradient(to bottom right, rgba(33, 92, 152, 0.3), rgba(33, 92, 152, 0))",
                  backdropFilter: "blur 7px",
                  boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.2)",

                  //border css
                  borderLeftWidth: "2px",
                  borderLeftColor: "rgba(54, 102, 151,0.1)",
                  borderTopWidth: "2px",
                  borderTopColor: "rgba(54, 102, 151,0.1)",
                  borderBottom: "0px",
                  borderRight: "0px",
                  borderRadius: "15px",
                }}
              >
                <div className="col-sm">
                  <Animation interval="500">
                    <h2 className="text-white underline">About Us</h2>
                    <br />
                    <h4 className="text-white">Project Description:</h4>

                    <li
                      className="text-white"
                      style={{ fontSize: "16px", fontWeight: "normal" }}
                    >
                      This product is developed to keep a record of all the
                      research work of professors from IITs.
                    </li>
                    <li
                      className="text-white"
                      style={{ fontSize: "16px", fontWeight: "normal" }}
                    >
                      As each IIT has its own website so for a research aspirant
                      it is hard to find the data of all the institutes at one
                      place and it is a tedious process to search for mentors
                      for your research.
                    </li>
                    <li
                      className="text-white"
                      style={{ fontSize: "16px", fontWeight: "normal" }}
                    >
                      The current system will be able to smoothen this track of
                      searching across all the websites and will deliver
                      required outputs necessary information depending on the
                      data scraped
                    </li>
                  </Animation>
                </div>

                <div className="col-sm">
                  <br />
                  <Animation duration={1000}>
                    <h3 className="text-white underline">Team:</h3>
                    <li className="text-white font-bold">Mentor:</li>
                    <p className="ml-4 text-white">
                      Assistant Professor Mrugendra Rahevar
                    </p>

                    <li className="text-white font-bold">Developer Team:</li>
                    <ul className="ml-4 text-white">Nihal Shaikh</ul>

                    <ul className="ml-4 text-white">Navdeep Dadhania</ul>

                    <ul className="ml-4 text-white">Akshit Soneji</ul>
                  </Animation>
                </div>
              </Card>
            </Animation>
          </div>

          <Footer absolute="1" />
        </section>
      </main>
    </>
  );
}

export default AboutUs;
