import { React, useState } from "react";

import SearchBar from "material-ui-search-bar";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import logo from "../image/Logo.png";
import { Alert } from "react-bootstrap";



function Home(props) {
  const [value, setValue] = useState("");
  const [Empty, setEmpty] = useState(false);

  function toResult(string) {

    if(string === ""){
      console.log("No");
      // setEmpty(true);
      // return(<Alert variant="primary">Please enter the search text!!!</Alert>);
      alert("Please enter search text!!");
    }
    else{
      props.history.push({
        pathname: "/result",
        state: string,
      });
    }
  }

  return (
    <>
      <Header />
      <main>
        <section
          className="relative row justify-content-center w-full h-full py-24"
          style={{ minHeight: "95vh" }}
        >
          <div
            className="col-sm-8 ml-4 justify-content-center"
            style={{ height: "auto" }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: "40%", marginLeft: "28%" }}
            />

            <SearchBar
              placeholder="Search by name,university and technology,"
              value={value}
              onChange={(newValue) => setValue(newValue)}
              onRequestSearch={() => toResult(value)}
              cancelOnEscape
            />
          </div>

          <Footer absolute />
        </section>
      </main>
    </>
  );

}

export default Home;
