import React from "react";

function DisplayMarsPhotos({ roverPhoto }) {

  // const object = roverPhoto.camera
// console.log(object.full_name)
  return (
    <div className="border-8">
      {/* <p>{object}</p><br/> */}

      <p>{roverPhoto.name}</p>
      <img src={roverPhoto.img_src} alt="Rover" />
      <p className="text-xl">DATE:{roverPhoto.earth_date}</p><br/>

    </div>
  );
}

export default DisplayMarsPhotos;
