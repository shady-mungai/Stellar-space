import React from "react";


    function Home() {
        return (
          <div className='relative h-[480px]'>
            <div className='absolute z-20 flex h-full flex-col items-start justify-center space-y-4 ml-12 tex-white font-bold w-[800px]'>
              <h2 className='text-6xl'>Welcome to Stellar Space</h2>
              <p>Know what surrounds you.</p>
              
            </div>
            <div className='bg-black absolute opacity-70 w-full h-full'>
              <img className='w-full h-full object-cover' src="" alt="" />
            </div>
          </div>
    
        )
      }
    
    export default Home