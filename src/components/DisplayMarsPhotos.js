import React from "react";

function DisplayMarsPhotos({ roverPhoto}) {
  const { camera } = roverPhoto;
  const {rover } = roverPhoto
  if (!roverPhoto.camera) {
    return null
  }
  const {landing_date,launch_date,status} = rover
  const { full_name } = camera;
  return (
    <div className="bg-black block max-w-sm p-6  border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      {/* <p>{object}</p><br/> */}

      <p className="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">{full_name}</p>
      <img className="rounded-t-lg" src={roverPhoto.img_src} alt="Rover" />
      <p className="mb-2 text-lg font-bold tracking-tight text-gray-300 dark:text-white">DATE:{roverPhoto.earth_date}</p><br/>
      <p className="mb-2 text-lg font-bold tracking-tight text-gray-300 dark:text-white">Rover Launched on:{launch_date}</p>
      <p className="mb-2 text-lg font-bold tracking-tight text-gray-300 dark:text-white">Rover Landed on:{landing_date}</p>
      <p className="mb-2 text-lg font-bold tracking-tight text-green-400 dark:text-white ">Rover Status:{status}</p>

    </div>  )


}

export default DisplayMarsPhotos;
