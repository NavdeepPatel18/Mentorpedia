import { useState, useEffect } from "react";
import Card from "./card";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import logo from "../image/Logo.png";
import SearchBar from "material-ui-search-bar";
import "../styles/loader.css";
import Error from "../image/Error.png";
import { Grow } from "@material-ui/core";
import noData from "../image/noData.png";

function Result(props) {
  const { state } = props.location;

  const [value, setValue] = useState(state);
  const [searchString, setSearchString] = useState(state);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch("http://localhost:3001/search_csv?q=" + searchString)
      .then((response) => response.json())
      .then((result) => {
        if (Object.keys(result).length !== 0) {
          setData(result.data);
          setLoading(false);
        } else {
          setError(true);
          setLoading(false);
        }
        
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, [searchString]);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center mt-48">
          <div className="lds-ripple d-flex justify-content-center">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <div className="w-full h-auto">
          <nav className="container-fluid px-2 py-3">
            <div className="col-sm-2 row float-left">
              <Link to="/search">
                <img
                  className="ml-5"
                  src={logo}
                  alt="LOGO"
                  style={{ width: "70%" }}
                />
              </Link>
            </div>
            <div className="col-sm-8 px-4 mx-auto ">
              <div className="col-sm-12 relative flex lg:static lg:block lg:justify-start">
                <Link
                  className="text-blue-600 text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
                  to="/"
                >
                  MENTORPEDIA
                </Link>
              </div>

              <SearchBar
                className="col-sm-9"
                placeholder="Search by Name, University, Department or Technology"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                onRequestSearch={() => setSearchString(value)}
              />
            </div>
          </nav>

          <hr style={{ height: "10px" }} className=" border-blue-700" />
          {isError ? (
            <div className="row justify-content-center">
              <div
                style={{
                  backgroundColor: "rgba(33, 92, 152)",
                }}
                className="col-sm-4"
              >
                <Grow in timeout={3000}>
                  <img
                    src={Error}
                    alt="Error"
                    style={{
                      marginTop: "10px",
                      width: "50%",
                      marginLeft: "23%",
                    }}
                  />
                </Grow>
                <h1 className="ml-4 text-white">We ran into some error!!</h1>
              </div>
            </div>
          ) : (
            <div
              style={{
                padding: "7px",
              }}
            >
              {data.length !== 0 ? (
                data.map((name, index) => {
                  return <Card data={name} key={index} />;
                })
              ) : (
                <div className="row  justify-content-center">
                  <div
                    className="col-sm-4"
                    style={{ backgroundColor: "rgba(33, 92, 152)" }}
                  >
                    <Grow in timeout={3000}>
                      <img
                        src={noData}
                        alt="No Data"
                        style={{
                          marginTop: "10px",
                          width: "50%",
                          marginLeft: "23%",
                        }}
                      />
                    </Grow>
                    <h1 style={{ color: "white", textAlign: "center" }}>
                      No Data Found!!!
                    </h1>
                    <p style={{ color: "white", textAlign: "center" }}>
                      Try searching by different technology, name or university!
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
          {isError | (data.length === 0) ? <Footer absolute="2" /> : <Footer />}
        </div>
      )}
    </>
  );
}

export default Result;
