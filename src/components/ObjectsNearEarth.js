import React from "react";

function ObjectsNearEarth({ object , diameter }) {
  // console.log(data)
  // console.log(object.nasa_jpl_url)
  
  return (
    <div className="object-container   border border-solid border-red-400 
    rounded-md p-4  bg-gray-400   hover:bg-green-100 text-center 
      justify-center pt-5 mt-4 mb-4 ml-10 mr-10 shadow-lg">
       
        <ul  className="ml-4 box-border ">
        <li className="text-3xl font-bold underline">NAME: {object.name}</li>

        <li> LIMITED NAME: {object.name_limited}</li>
        <li> MAGNITUDE:{object.absolute_magnitude_h}</li>
        <li className="text-red-500">LINK: {object.nasa_jpl_url}</li>
        <li>ID: {object.id}</li>
        <li>
          {/* 
           */}
           <li className={object.is_potentially_hazardous_asteroid ?
             'text-red-500' : 'text-green-500'}>Hazardous:
              {object.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</li>
        </li>
        <li>SENTRY: {object.is_sentry_object ? "Yes" : "No"}</li>
      </ul>
    </div>
  );
}


export default ObjectsNearEarth;
