import React from "react";
import "./card.css";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../image/Logo.png";

export default function Cards({ data }) {
  return (
    <>
      <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            borderRadius: "15px",
            backgroundColor: "#808080",
            width: "80%",
            borderWidth: "0px",
            marginBottom: "10px",
            marginLeft: "10%",
          }}
        >
          <Card.Body>
            <div>
              <Card.Img
                style={{ width: "130px" }}
                src={data._source["image"]}
                onError={(event) => {
                  // If src points to any non-image url
                  event.target.src = logo;
                }}
              />
              <Card.Title style={{ fontSize: "30px", color: "white" }}>
                {data._source["name"]}
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                <ul>
                  {data._source["position"].map((pos, index) => (
                    <li>{pos}</li>
                  ))}
                </ul>

                {/* {data._source["position"]} */}
              </Card.Text>

              <span style={{ fontWeight: "bold", color: "white" }}>
                Contact Details:
              </span>
              <Card.Text style={{ color: "white" }}>
                {data._source["email"]}
                <br />
                {data._source["phone"]}
                <br />
                <a href={data._source["website"]}>{data._source["website"]}</a>
              </Card.Text>
              <Card.Text style={{ color: "white" }}>
                <ul>
                  {data._source["research_areas"].map((pos, index) => (
                    <li>{pos}</li>
                  ))}
                </ul>
                {/* {data._source["research_areas"]}{" "} */}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
