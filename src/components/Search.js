import React from "react";
import "../style/Search.css";
import logo from "./Assets/Logo_size_100.png";

import { Link } from "react-router-dom";
import { Search, Grid, Header, Segment, Button } from "semantic-ui-react";

function SearchBox(props) {
  const goBack = () => {
    props.history.push("/");
  };

  return (
    <div className="search">
      <div className="search__form">
        <div className="search__form-logo">
          <img src={logo} alt="logo" onClick={goBack} />
        </div>
        <div className="search_grid">
          <Grid columns="equal">
            <Grid.Column floated="left" width={9}>
              <Search fluid />
            </Grid.Column>
            <Grid.Column className="search_grid_col" floated="right" width={4}>
              <Button>Search</Button>
            </Grid.Column>
          </Grid>
        </div>
      </div>
      <div className="show">
        <div className="show_result">Search data shown hear</div>
      </div>
    </div>
  );
}

export default SearchBox;
