// import axios from 'axios'
import React,{ useEffect, useState } from 'react'

const api_key = process.env.REACT_APP_API_KEY


function Map() {
const [image, setImage] = useState("")



// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY


useEffect(() => {
  fetch(`https://api.nasa.gov/planetary/earth/imagery&api_key=${api_key}`, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.data())
.then(data => setImage(image))
}, [image])


if (!image) {
  return <h1>Loading...</h1>
}

  return (
    <div>
      <h1>Map of Asteroids</h1>
      <div>{image}</div>
    </div>
  );
}

export default Map


