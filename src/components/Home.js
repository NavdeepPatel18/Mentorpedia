import React, { Component } from "react";
import Footer from "./FooterSmall";
import "../style/Home.css";

import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import { Search, Grid, Header, Segment, Button } from "semantic-ui-react";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: {},
      search: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  CheckLogin = () => {
    return fetch("http://localhost:3001/search/my_test_search/_doc?q=sm", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(
        (result) => {
          if(result){
            this.setState({
              isLoaded: true,
              data: result,
            });
          }
          else{
            this.setState({
              isLoaded: false,
              data: null,
            });
          }
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
      )
      .catch((error) => {
        console.error(error);
      });
  };

  handleChange(event) {
    this.setState({ search: event.target.search });
  }

  handleSubmit(event) {
    event.CheckLogin();
  }

  render() {
    const { error, isLoaded, data } = this.state;

    return (
      <div className="home">
        <div className="home__container">
          <div className="home_grid_margin">
            <Grid>
              <Grid.Column width={6} className="home_grid_col_margin">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    <input
                      type="text"
                      value={this.state.search}
                      onChange={this.handleChange}
                    />
                  </label>
                  {/* <input
                    type="submit"
                    value="Submit"
                    // onPress={this.CheckLogin}
                  /> */}

                  <Link to="/search" className="btn btn-primary">
                    Search
                  </Link>
                </form>
              </Grid.Column>
            </Grid>
          </div>
        </div>
        {/* <div>
          {" "}
          <ul>
            {data.map((item) => (
              <li>
                {item.hits[0]._source.name} {item.hits[0]._source.dept}{" "}
                {item.hits[0]._source.collage} {item.hits[0]._source.research_areas/2}
              </li>
            ))}
          </ul>{" "}
          {this.state.data}
        </div> */}
      </div>
    );
  }
}

export default Home;
