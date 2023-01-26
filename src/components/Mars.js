import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMarsPhotos from "./DisplayMarsPhotos";

const api_key = process.env.REACT_APP_API_KEY;

function Mars() {
  // state of the roverPhotos and its data
  const [roverPhotos, setRoverPhotos] = useState([{}]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${api_key}`
      )
      .then((res) => {
                        setRoverPhotos(res.data.photos)
                      });
  }, []);
   
  console.log(roverPhotos[0])

  const eachImage = roverPhotos.map((roverPhoto, index) => {
    return (
      <DisplayMarsPhotos
        key={index}
        roverPhoto={roverPhoto}
      />
  
    );
  });
  


  //state that contains initial Mars weather data
  const [marsTemp, setMarsTemp] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`
      )
      .then((res) => {
        setMarsTemp(res.data.validity_checks["1219"].AT.sol_hours_with_data);
      });
  }, []);

  
console.log(marsTemp)


  return (
    <div className="bg-gray-300 ">
      {roverPhotos ? (
        <div className="bg-gray-300 grid grid-cols-4">
          {eachImage}
          </div>
      ) : (
        "Loading ..."
      )}
      <br />

    </div>
  );
}

export default Mars;
