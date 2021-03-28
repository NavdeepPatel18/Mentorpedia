import React, { useState , useEffect } from "react";
import "../style/Search.css";
import logo from "./Assets/Logo_size_100.png";
import { Loading } from "./LoadingComponent";

import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

// import { FadeTransform, Fade, Stagger } from "react-animation-components";

import { Link } from "react-router-dom";
import { Search, Grid, Header, Segment, Button } from "semantic-ui-react";

// function Search(props) {
//   const goBack = () => {
//     props.history.push("/");
//   };

//   return (
//     <div className="search">
//       <div className="search__form">
//         <div className="search__form-logo">
//           <img src={logo} alt="logo" onClick={goBack} />
//         </div>
//         <div className="search_grid">
//           <Grid columns="equal">
//             <Grid.Column floated="left" width={9}>
//               <Search fluid />
//             </Grid.Column>
//             <Grid.Column className="search_grid_col" floated="right" width={4}>
//               <Button>Search</Button>
//             </Grid.Column>
//           </Grid>
//         </div>
//       </div>
//       <div className="show">
//         <div className="show_result">Search data shown hear</div>
//       </div>
//     </div>
//   );
// }

function Rendersearchdata({ data }) {
  if (data != null)
    return (
      // <FadeTransform
      //   in
      //   transformProps={{
      //     exitTransform: "scale(0.5) translateY(-50%)",
      //   }}
      // >
      <Card>
        <CardBody>
          <CardTitle>{data}</CardTitle>
          <CardText>
            <ul>
              <li>{data}</li>
              {/* <li>{data.hits[0]._source.dept}</li>
              <li>{data.hits[0]._source.research_areas/0}</li>
              <li>{data.hits[0]._source.research_areas/1}</li>
              <li>{data.hits[0]._source.position/0}</li> */}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
}

const SearchBox = (props) => {
  const goBack = () => {
    props.history.push("/");
  };

  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.data != null) {
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
              <Grid.Column
                className="search_grid_col"
                floated="right"
                width={4}
              >
                <Button>Search</Button>
              </Grid.Column>
            </Grid>
          </div>
        </div>
        <div className="show">
          <div className="show_result">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3>{props.data.name}</h3>
                  <hr />
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-5 m-1">
                  <Rendersearchdata dish={props.data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
              <Grid.Column
                className="search_grid_col"
                floated="right"
                width={4}
              >
                <Button>Search</Button>
              </Grid.Column>
            </Grid>
          </div>
        </div>
        <div className="show">
          <div className="show_result">data not found</div>
        </div>
      </div>
    );
  }
};

// function MyComponent() {
//   const [error, setError] = useState(null);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [data, setItems] = useState([]);

//   // Note: the empty deps array [] means
//   // this useEffect will run once
//   // similar to componentDidMount()
//   useEffect(() => {
//     fetch("http://localhost:3001/search/my_test_search/_doc?q=sm")
//       .then(res => res.json())
//       .then(
//         (result) => {
//           setIsLoaded(true);
//           setItems(result);
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           setIsLoaded(true);
//           setError(error);
//         }
//       )
//   }, [])

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   } else if (!isLoaded) {
//     return <div>Loading...</div>;
//   } else {
//     return (
//       <ul>
//         {/* {data.hits.map(item => (
//           <li key={item._source.collage}>
//             {item._source.name} {item._source.collage}
//           </li>
//         ))} */}
//         <ul>
//           <li>{data}</li>
//         </ul>
//       </ul>
//     );
//   }
// }

export default SearchBox;
