import axios from 'axios'
import React,{ useState,useEffect } from 'react'

function MarsWeather() {
  const api_key = process.env.REACT_APP_API_KEY;

  const [marsData, setMarsData] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/insight_weather/?api_key=${api_key}&feedtype=json&ver=1.0`
      )
      .then((res) => {
        setMarsData(res.data.validity_checks["1219"]);
      });
  }, [api_key]);
   //console.log(marsData)
  const { AT } = marsData;
if (AT) {
  const { sol_hours_with_data } = AT;
  var eachData = sol_hours_with_data.map((data)=>{return data})
  var oneMeasure = eachData.map((value)=>{return (
    <div>{value}</div>)})
}
else{

}


  return (
    <div className='bg-black'>
      <h1 className='text-white bold text-3xl'>Mars Weather Statistics</h1>
      <label className='text-white bold text-2xl'>ATMOSPHERIC TEMPERATURE</label>
      <p className='text-white text-xl'>{oneMeasure}</p>
      <label className='text-white bold text-2xl'>HORIZONTAL WIND SPEED</label>
      <p className='text-white text-xl'>{oneMeasure}</p>
      <label className='text-white bold text-2xl'>PRESSURE</label>
      <p className='text-white text-xl'>{oneMeasure}</p>
      <label className='text-white bold text-2xl'>WIND DIRECTION</label>
      <p className='text-white text-xl'>{oneMeasure}</p>

    </div>
  )

  
}

export default MarsWeather
