import React, { useEffect, useState } from "react";
import axios from "axios";


 function DayPic(){

    const [pictureOfTheDay, setpictureOfTheDay] = useState([]);

   
        useEffect(()=>{
            fetch('https://api.nasa.gov/planetary/apod?api_key=lavrMO5ACfh2RwMlUFPcKPCGJIlB1hbdokxfmiZU')
            .then(r => r.json())
            .then(data => setpictureOfTheDay(data))
         },[])
     console.log(data)
    

   
 }
 export default DayPic;