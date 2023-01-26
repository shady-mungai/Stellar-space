import React, { useEffect, useState } from "react";


 function DayPic(){

const api_key = process.env.REACT_APP_API_KEY;

    const [pictureOfTheDay, setpictureOfTheDay] = useState([]);

   
        useEffect(()=>{
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`)
            .then(r => r.json())
            .then(data => setpictureOfTheDay(data))
            
         },[api_key])
     console.log(pictureOfTheDay)
     const { date,explanation,title,url } = pictureOfTheDay

     return (
        <div className="bg-black flex">
            <img className="object-cover w-fir rounded-t-lg md:rounded-none md:rounded-l-lg" src={url} alt="" />
            <div className="border-2 flex-wrap right-7 items-end">
            <strong className="text-gray-400 bold text-md">Captured on</strong>
    
            <p className="text-white text-lg">{date}</p>
            <strong className="text-gray-400 bold text-md">Image Title</strong>

            <p className="text-white text-lg">{title}</p>
            <strong className="text-gray-400 bold text-md">About the picture</strong>
            <p className="text-white text-lg">{explanation}</p>


            </div>
        </div>
     )
    

   
 }
 export default DayPic;