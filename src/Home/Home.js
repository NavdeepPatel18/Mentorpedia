import { useState } from "react";

import SearchBar from "material-ui-search-bar";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import logo from "../image/Logo.png";
import { Alert } from "react-bootstrap";
import { Animation } from "../styles/Animation.tsx";

function Home(props) {
  const [value, setValue] = useState("");
  const [Show, setShow] = useState(false);

  function toResult(string) {
    if (string === "") {
      console.log("No");
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 5000);

      // return(<Alert variant="primary">Please enter the search text!!!</Alert>);
      // alert("Please enter search text!!");
    } else {
      props.history.push({
        pathname: "/result",
        state: string,
      });
    }
  }

  return (
    <>
      {Show && (
        <Alert variant="primary" className="font-semibold text-center">
          Please enter the search text!!!
        </Alert>
      )}
      <Header />

      <main>
        <section
          className="relative row justify-content-center w-full h-full py-24"
          style={{ minHeight: "85vh" }}
        >
          <div
            className="col-sm-8 ml-4 justify-content-center"
            style={{ height: "auto" }}
          >
            <Animation interval="1000">
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
                // searchIcon={
                //   <SearchIcon className="absolute" style={{ color: "blue" }} />
                // }
                cancelOnEscape
              />
            </Animation>
          </div>

          <Footer absolute />
        </section>
      </main>
    </>
  );
}

export default Home;
