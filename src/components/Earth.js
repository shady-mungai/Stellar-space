import React, { useEffect, useState } from "react";
import axios from "axios";
import ObjectsNearEarth from "./ObjectsNearEarth";

function Earth() {
  const [data, setData] = useState([{}]);
  
  const api_key = process.env.REACT_APP_API_KEY;


  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${api_key}`
      )
      .then((response) => {
        setData(response.data.near_earth_objects);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api_key]);
  console.log(data[0]);
  //  console.log(data[0].close_approach_data)
  //  console.log(data)

  // console.log(data[0][close_approach_data])

  const eachObject = data.map((object, index) => {
    return (

        <ObjectsNearEarth key={index}object={object} />
      
    );
   
      

  });

  return <div className="bg-gray-500 grid grid-cols-3">{eachObject}</div>;
}

 
export default Earth;
