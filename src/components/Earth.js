import React, { useEffect, useState } from "react";
import axios from "axios";
import ObjectsNearEarth from "./ObjectsNearEarth";

function Earth() {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=YT2v2f6KZQXdSMtzPMrdu27ojErRY7iIsKHjn1KK"
      )
      .then((response) => {
        setData(response.data.near_earth_objects);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(data[0]);
  //  console.log(data[0].close_approach_data)
  //  console.log(data)

  // console.log(data[0][close_approach_data])

  const eachObject = data.map((object, index) => {
    return (
      <div key={index}>
        {" "}
        <ObjectsNearEarth object={object} />{" "}
      </div>
    );
   
      

  });

  return eachObject;
}

 
export default Earth;
