import data from '../Data/data.json';
import Card from './card';
import Header from './Header'
import Footer from './Footer'

import React, { useState, useEffect } from "react";


function Result(props) {

  const { state } = props.location;

  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [research, setResearch] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3001/search_csv?q=" + state)
      .then((response) => response.json())
      .then((result) => {
        setLoading(false);
        setData(result.data);
        console.log(result.data);

        const temp = [];
        for (var i = 0; i < result.data.length; i++) {
          for (var j = 0;j < result.data[i]._source["research_areas"].length;j++) {
            temp.push(result.data[i]._source["research_areas"][j]);
          }
        }

        setResearch(temp);
      })
      .catch((e) => {
        setLoading(false);
        setError("fetch failed");
      });
  }, []);

  if (isLoading) {
    return <p>loading..</p>;
  }

  if (error !== "") {
    return <p>ERROR: {error}</p>;
  }

  return (
    <div className="w-full h-auto">
      <Header searchString={state}/>
      
      <div>
        {data.map((name,index) => {
          return <Card data={name} key={index}/>
        })}
      </div>
      <Footer/>
    </div>
  );
}

export default Result;
