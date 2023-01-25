import React from "react";


 
 function ObjectsNearEarth({object}) {
  // console.log(data)
  return(
    <div className="object-container">
      <p>{object.name}</p>
      <p>{object.is_potentially_hazardous_asteroid
}</p>
        <p>{object.absolute_magnitude_h}</p>
        {/* <p>{object.close_approach_data[0].close_approach_date}</p> */}

    
      {/* <img src={object.nasa_jpl_url} alt="nasa"/> */}
    </div>
  )

  
  }


  
export default ObjectsNearEarth;
