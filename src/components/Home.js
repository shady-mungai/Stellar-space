import React, { useState } from 'react';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);
  
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
        return (
          <div className='relative h-[480px]'>
            <div className='absolute z-20 flex h-full flex-col items-start justify-center space-y-4 ml-12 tex-white font-bold w-[800px]'>
              <h2 className='text-6xl'>Welcome to Stellar Space</h2>
              <p>Know what surrounds you.</p>
             <div id='day'>
             <div  className='bg-pink-500 px-[12px] py-[9px] text-[15px] font-bold text-white rounded-md hover:bg-pink-400'>
              <a href="#pic"  onClick={handleClick}><i ></i> picture of the day </a>
             </div> 
             </div>
            </div>
            <div className='bg-black absolute opacity-70 w-full h-full'>

            </div>
          </div>
    
        )
      }
    
    export default Home