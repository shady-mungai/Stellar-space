import React, { useEffect, useState } from "react";
import axios from "axios";


 function DayPic(){

    const [data, setData] = useState([{}]);

   

    useEffect(() => {

        axios.get('https://api.nasa.gov/planetary/apod?api_key=lavrMO5ACfh2RwMlUFPcKPCGJIlB1hbdokxfmiZU')
        .then((response)=>{
            setData(response.data.pic);

        })
        .catch((error)=>{
            console.log(error);
        });
    },[]); 
    console.log(data[0])
    console.log(data[0].nasa_jpl_url)

   
 }
 export default DayPic;