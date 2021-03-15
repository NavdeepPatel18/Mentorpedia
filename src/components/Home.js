import React from "react";
import Footer from "./FooterSmall";
import "../style/Home.css";
import { Link } from "react-router-dom";
import { Search, Grid, Header, Segment, Button } from "semantic-ui-react";

const source = [
  { category: "South America", title: "Brazil" },
  { category: "South America", title: "Peru" },
  { category: "North America", title: "Canada" },
  { category: "Asia", title: "South Korea" },
  { category: "Asia", title: "Japan" },
  { category: "Asia", title: "China" },
  { category: "Europe", title: "Denmark" },
  { category: "Europe", title: "England" },
  { category: "Europe", title: "France" },
  { category: "Europe", title: "Germany" },
  { category: "Africa", title: "Ethiopia" },
  { category: "Africa", title: "Nigeria" },
  { category: "Africa", title: "Zimbabwe" },
];

function Home(props){

  
  const [state, setState] = React.useState("");
  const searchGoogle = (e) => {
    props.history.push({ pathname: "/search", state });
  };
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
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
