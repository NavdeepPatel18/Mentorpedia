import React, { Component } from "react";
import Footer from "./FooterSmall";
import "../style/Home.css";

import { Link } from "react-router-dom";

import { Search, Grid, Header, Segment, Button } from "semantic-ui-react";

class Home extends Component {
  

  componentDidMount() {
    fetch("http://localhost:3001/users", {
      method: "GET",
      // mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "http://localhost:3000",
        // "Access-Control-Allow-Credentials": "true",
        // "Access-Control-Allow-Methods":"GET,POST,OPTIONS",
        // "Access-Control-Allow-Headers" : "Origin, Content-Type, Accept",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.faculty,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="home">
          <div className="home__container">
            <div className="home_grid_margin">
              <Grid>
                <Grid.Column width={6} className="home_grid_col_margin">
                  <Search fluid />
                  <div className="home__group">
                    <Link to="/search">
                      <Button>Search</Button>
                      {/* <input type="button" className="home__btn" value="Search" /> */}
                    </Link>
                  </div>
                </Grid.Column>
              </Grid>
            </div>
          </div>
          <div>
            {" "}
            <ul>
              {items.map((item) => (
                <li>{item.name}</li>
              ))}
            </ul>{" "}
          </div>
        </div>
      );
    }
  }
}

export default Home;
