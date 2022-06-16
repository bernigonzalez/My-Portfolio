import React, { useState } from 'react'
import {HiMenu} from 'react-icons/hi';


function NavBar() {

  const [showNavMobile, setShowNavMobile] = useState(false)
  const handleNavMobile = () => {
    console.log("estamos poniendo la nav en ", !showNavMobile)
    setShowNavMobile(!showNavMobile)
  }

  return ( <>
    <div className='container w-full  fixed z-[100] flex justify-between  uppercase'>
{/* NavBar - left side */}
        <div className='font-serif italic text-xl  px-1 m-2  text-indigo-700'>
            <p>bernardo dev</p>
        </div>
{/* NavBar - right side */}
        <div className='hidden sm:flex justify-between'>
            <a href="/#main" className='m-2 px-1'>Home</a>
            <a href="/#about" className='m-2 px-1'>About</a>
            <a href="/#skills" className='m-2 px-1'>Skills</a>
            <a href="/#projects" className='m-2 px-1'>Projects</a>
            <a href="/#contact" className='m-2 px-1 rounded-full border-solid border-2 border-indigo-500 text-white bg-indigo-700'>Contact</a>
        </div>

{/* Mobile button */}
        <div className='sm:hidden flex items-center m-2 px-4'>
         <button onClick={handleNavMobile}>   
            <HiMenu size={30}/>
        </button>
        </div>
    </div>

{/* // mobile menu */}
        
        <div className={!showNavMobile ? "hidden" : 'flex flex-col sm:hidden uppercase' }>

            <a href="/#main" className='m-2 px-6 hover:bg-gray-200'>Home</a>
            <a href="/#about" className='m-2 px-6 hover:bg-gray-200'>About</a>
            <a href="/#skills" className='m-2 px-6 hover:bg-gray-200'>Skills</a>
            <a href="/#projects" className='m-2 px-6 hover:bg-gray-200'>Projects</a>
            <a href="/#contact" className='m-2 px-6 hover:bg-gray-200'>Contact</a>
        
        </div>
    </>)
}

export default NavBar