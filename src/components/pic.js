import React, { useEffect, useState } from "react";


 function DayPic(){

const api_key = process.env.REACT_APP_API_KEY;

    const [pictureOfTheDay, setpictureOfTheDay] = useState([]);

   
        useEffect(()=>{
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
            .then(r => r.json())
            .then(data => setpictureOfTheDay(data))
            
         },[])
     console.log(pictureOfTheDay)
    

   
 }
 export default DayPic;