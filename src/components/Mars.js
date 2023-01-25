import axios from "axios";
import React, { useEffect, useState } from "react";
import DisplayMarsPhotos from "./DisplayMarsPhotos";
import MarsWeather from "./MarsWeather";

const api_key = process.env.REACT_APP_API_KEY;

function Mars() {
    // state of the roverPhotos and its data
  const [roverPhotos, setRoverPhotos] = useState([{}]);
  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${api_key}`
      )
      .then((res) => setRoverPhotos(res.data.photos));
  }, []);
//  console.log(roverPhotos);

  const eachImage = roverPhotos.map((roverPhoto, index) => {
    return (
      <div key={index} className="bg-gray-200 object-contain grid">
        <DisplayMarsPhotos roverPhoto={roverPhoto} camera={roverPhoto.camera}/>
      </div>
    );
  });

 //state that contains initial Mars weather data
const [marsWeather,setMarsWeather] = useState({})
useEffect(()=>{
    axios
    .get(`https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`)
     .then(res=>setMarsWeather(res.data.validity_checks['1219']))
},[])

  

  return <div>
  {roverPhotos ? <div>{eachImage}</div> : "Loading ..."}
  <MarsWeather />
  </div>;
}

export default Mars;
