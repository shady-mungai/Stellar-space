import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-700 text-white h-20">
      <div className="flex justify-between items-center w-full h-19 container  mx-auto">
        {/* logo */}
        <div>
          <h2 className="text-3xl font-bold">
            <span>Stellar Space</span>
          </h2>
        </div>
        {/* three links -> home, analytics & profile */}
        <div className="flex text-white gap-5 text-lg">
        <div>
            <Link to="/">Home</Link>
          </div>
        <div>
            <Link to="./DayPic">Pic Of The Day</Link>
          </div>
          <div>
            <Link to="/earth">Objects Near Earth</Link>
          </div>

          <div>
            <Link to="./Mars">Mars</Link>
          </div>
          <div>
            <Link to="./MarsWeather">Mars Weather</Link>
          </div>
          <div>
            <Link to="./AsteroidsMap">Asteroids</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

