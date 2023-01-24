import axios from 'axios'
import React, { useEffect , useState } from 'react'
import DisplayMarsPhotos from './DisplayMarsPhotos'


const api_key = process.env.REACT_APP_API_KEY

function Mars() {
    const [roverPhotos,setRoverPhotos] = useState([{

    }])
useEffect(()=>{
    axios
    .get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${api_key}`)
    .then(res=>setRoverPhotos(res.data.photos))
},[])
console.log(roverPhotos)
   
     const eachImage = roverPhotos.map((roverPhoto,index)=>{
        return (
            <div key={index} className='photos-container'>
                <DisplayMarsPhotos roverPhoto={roverPhoto}/>
            </div>
        )
     })

  return (
    <>
    {eachImage}
    </>
  )
}

export default Mars
