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
  }, []);
  // console.log(marsData)
  const { AT } = marsData;
if (AT) {
  const { sol_hours_with_data } = AT;
  console.log(sol_hours_with_data);
}

  return (
    <div>
      <h1>Mars Weather Statistics</h1>
      <p>AUGUST 26,2022</p>
      <p></p>
    </div>
  )

  
}

export default MarsWeather
