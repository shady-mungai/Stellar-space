import React from "react";

function DisplayMarsPhotos({ roverPhoto }) {
  //const object= roverPhoto.camera
  // console.log(object)
  return (
    <div className="each-photo">
      <img src={roverPhoto.img_src} alt="Rover" />
      <p>DATE:{roverPhoto.earth_date}</p><br/>
      {roverPhoto.camera.full_name}
      <p>{roverPhoto.sol}</p>
    </div>
  );
}

export default DisplayMarsPhotos;
