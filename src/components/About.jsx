import React from 'react'
import bernardoImg from '../assets/profilePic.png'


function About() {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-4'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-indigo-700'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    <p className='py-2 text-gray-600'>💻 Full-Stack Web Developer</p>
                    <p className='py-2 text-gray-600'>
                    👋 I'm Bernardo and I became interested in programming when I started working at a bank and I was shown the world of data science: first as a Data Analyst and then developing machine learning models.
                    </p>
                    <p className='py-2 text-gray-600'>
                    📚At the same time, I completed 70% of my degree in Economics where I learned a lot about willingness to study and teamwork. But, little by little, I ended up liking programming algorithms more than analyzing the results I obtained from them. Adding to the fact that I love creating things, I co-founded a Startup in the first years of college, I was encouraged to make a change in my career and do Henry's Full Stack Web Development Bootcamp: extremely intensive but it opened me the doors to this fascinating industry. 
                    </p>
                    <p className='py-2 text-gray-600'>
                    🧐I'm looking for my very first formal job as a developer. 
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out my latest projects.</p>
            </div>
            <div className='w-full m-auto h-auto shadow-xl border-2 border-indigo-700 shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <img className='rounded-xl' src={bernardoImg} alt="my profile pic" />
            </div>
        </div>
    </div>
  )
}

export default About