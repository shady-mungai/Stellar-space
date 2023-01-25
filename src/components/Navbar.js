import React, { useState } from 'react';
import "../index.css";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="navbar">
    <div >
      <div  id="myNavbar">
      <h2 className='font-bold text-xl'> Stellar Space</h2>
        <div  id="fa-fa">
        <div className="w3-left w3-hide-small">
          <a href="#Home"  onClick={handleClick}><i className="fa fa-user"></i> Home </a>
          <a href="#"  onClick={handleClick}><i className="fa fa-user"></i> Earth</a>
          <a href="#" onClick={handleClick}><i className="fa fa-th"></i> Mars </a>
          <a href="#" onClick={handleClick}><i className="fa fa-th"></i> Space </a>
        </div>
     </div>

      </div>
    </div>
    </nav>

  );
}


export default Navbar