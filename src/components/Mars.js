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
   

  const eachImage = roverPhotos.map((roverPhoto, index) => {
    return (
      <DisplayMarsPhotos
        key={index}
        roverPhoto={roverPhoto}
      />
  
    );
  });
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
