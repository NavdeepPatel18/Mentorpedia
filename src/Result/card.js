import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/card.css";
import logo from "../image/Logo.png";
import { Grow } from "@material-ui/core";

export default function Cards({ data, key }) {
  return (
    <>
      <Grow in>
        <div
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
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
            <Card.Body className="row">
              <div className="col-sm">
                <Grow in timeout={700}>
                  <Card.Img
                    style={{
                      width: "130px",

                      //border
                      borderLeft: "solid 2px rgba(255, 255, 255,0.1)",
                      borderTop: "solid 2px rgba(255, 255, 255,0.1)",
                      borderBottom: "0px",
                      borderRight: "0px",
                      boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.3)",
                    }}
                    src={data._source["image"]}
                    onError={(event) => {
                      event.target.src = logo;
                    }}
                  />
                </Grow>
                {/* Name */}

                <Card.Title
                  style={{ fontSize: "30px", color: "white", marginTop: "5px" }}
                >
                  {data._source["name"]}
                </Card.Title>

                {/* Position */}

                <span style={{ fontWeight: "bold", color: "darkblue" }}>
                  Position:
                </span>
                <div
                  className="col-sm-8 positions"
                  style={{
                    maxHeight: "150px",
                    overflowY: "auto",
                    color: "white",
                  }}
                >
                  {data._source["position"][0] !== null
                    ? data._source["position"].map((pos, index) => {
                        return <ul key={index}>{pos}</ul>;
                      })
                    : "Information not available!"}
                </div>
              </div>
              <div className="col-sm flex-column">
                <div className="col-sm-6 mw-100 p-0">
                  <Card.Text style={{ color: "white" }}>
                    <span style={{ fontWeight: "bold", color: "darkblue" }}>
                      Contact Details:
                    </span>
                    <br />
                    <div
                      // className="col-sm-12 "
                      style={{ width: "auto", marginLeft: "15px" }}
                    >
                      Email :{" "}
                      {data._source["email"] !== null
                        ? data._source["email"]
                        : "No data available!"}
                      <br />
                      Phone :{" "}
                      {data._source["phone"] !== null
                        ? data._source["phone"]
                        : "No data available!"}
                      <br />
                      Website:{" "}
                      <a
                        href={
                          data._source["website"] !== null
                            ? data._source["website"]
                            : "No data available!"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data._source["website"]}
                      </a>
                    </div>
                  </Card.Text>
                </div>

                {/* Research Area */}

                <div className="col-sm-6 mw-100 mt-3 p-0">
                  <span style={{ fontWeight: "bold", color: "darkblue" }}>
                    Research Areas:
                  </span>
                  <div
                    className="col-sm-8 r_areas"
                    style={{
                      maxHeight: "150px",
                      overflowY: "auto",
                      color: "white",
                    }}
                  >
                    {data._source["research_areas"][0] !== null
                      ? data._source["research_areas"].map((r_area, index) => {
                          return <ul key={index}>{r_area}</ul>;
                        })
                      : "Information not available!"}
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </Grow>
    </>
  );
}
