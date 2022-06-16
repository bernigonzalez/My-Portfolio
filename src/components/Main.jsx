import React from 'react'
import cvBernardoDeveloper from '../assets/CV - Bernardo Gonzalez - Developer.pdf'

function Main() {
  return (
    <div id='main' className='container max-w-[1240px] h-screen flex  justify-center items-center text-center' >
        <div>    
            <p className=' text-gray-600 uppercase'>Let's Build Cool Things Together!</p>
            <h2 className=' py-1 text-gray-700'>Hi, I'm <span className='text-indigo-700'>Bernardo</span></h2>
            <h2 className='py-1 text-gray-700'>A Full-Stack Web Developer</h2>
            

{/* My-Links Buttons             */}
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4 uppercase cursor-pointer'>
                <div className='p-2 rounded-full border-solid border-2 border-indigo-500 text-indigo-700'><a href="/#projects" >Check my Projects</a></div>
                <div className='p-2 rounded-full border-solid border-2 border-indigo-500 text-white bg-indigo-700 '><a download href={cvBernardoDeveloper}>Download CV</a></div>
                
                
            </div>
        </div>        
    </div>   
  )
}



export default Main