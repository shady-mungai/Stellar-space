import React from "react";

function ObjectsNearEarth({ object , diameter }) {
  // console.log(data)
  // console.log(object.nasa_jpl_url)
  
  return (
    <div className="bg-gray-300 block max-w-sm p-6  border border-gray-200 rounded-lg shadow  dark:border-gray-700 dark:hover:bg-gray-700">
       
        <ul  className="ml-4 box-border ">
        <li className="text-3xl font-bold underline">NAME: {object.name}</li>

        <li> LIMITED NAME: {object.name_limited}</li>
        <li> MAGNITUDE:{object.absolute_magnitude_h}</li>
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
