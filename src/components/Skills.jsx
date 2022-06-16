import React from 'react'


import cssImg from "../assets/skills/css.png"
import firebaseImg from "../assets/skills/firebase.png"
import githubImg from "../assets/skills/github.png"
import htmlImg from "../assets/skills/html.png"
import javascriptImg from "../assets/skills/javascript.png"
import mongoImg from "../assets/skills/mongo.png"
import nextjsImg from "../assets/skills/nextjs.png"
import nodeImg from "../assets/skills/node.png"
import postgresImg from "../assets/skills/postgres.png"
import reactImg from "../assets/skills/react.png"
import tensorFlowImg from "../assets/skills/tensorflow.png"
import webSocketsImg from "../assets/skills/webSockets.gif"

function Skills() {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div id='skills' className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Skills</p>
            <h2 className='py-4'>What Can I do?</h2>
            <div className='grid md:grid-cols-4 gap-8'>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={htmlImg} alt='/' width='64px' height='64px' />
                                </div>
                                <div>
                                    <h3 className='flex flex-col items-center justify-center'>
                                         HTML       
                                    </h3>
                                </div>
                        </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={cssImg} alt='/' width='64px' height='64px' />
                                </div>
                                <div>
                                    <h3 className='flex flex-col items-center justify-center'>
                                         CSS       
                                    </h3>
                                </div>
                        </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={javascriptImg} alt='/' width='64px' height='64px' />
                                </div>
                                <div>
                                    <h3 className='flex flex-col items-center justify-center'>
                                         JAVASCRIPT      
                                    </h3>
                                </div>
                        </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={reactImg} alt='/' width='64px' height='64px' />
                                </div>
                                <div>
                                    <h3 className='flex flex-col items-center justify-center'>
                                         REACT.JS     
                                    </h3>
                                </div>
                        </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={nodeImg} alt='/' width='64px' height='64px' />
                                </div>
                                <div>
                                    <h3 className='flex flex-col items-center justify-center'>
                                         NODE.JS     
                                    </h3>
                                </div>
                        </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={githubImg} alt='/' width='64px' height='64px' />
                                </div>
                                <div>
                                    <h3 className='flex flex-col items-center justify-center uppercase'>
                                         GITHUB     
                                    </h3>
                                </div>
                        </div>
                </div>

                
                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={mongoImg} alt='/' width='64px' height='64px' />
                                </div>
                                <div>
                                    <h3 className='flex flex-col items-center justify-center uppercase'>
                                         MONGO DB     
                                    </h3>
                                </div>
                        </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={postgresImg} alt='/' width='64px' height='64px' />
                                </div>
                                <div>
                                    <h3 className='flex flex-col items-center justify-center uppercase'>
                                         Postgres     
                                    </h3>
                                </div>
                        </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={nextjsImg} alt='/' width='64px' height='64px' />
                                </div>
                                <div>
                                    <h3 className='flex flex-col items-center justify-center uppercase'>
                                         Next.js     
                                    </h3>
                                </div>
                        </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={firebaseImg} alt='/' width='64px' height='64px' />
                                </div>
                                <div>
                                    <h3 className='flex flex-col items-center justify-center uppercase'>
                                         firebase     
                                    </h3>
                                </div>
                        </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={tensorFlowImg} alt='/' width='64px' height='64px' />
                                </div>
                                <div>
                                    <h3 className='flex flex-col items-center justify-center uppercase'>
                                         Tensorflow.js    
                                    </h3>
                                </div>
                        </div>
                </div>

                <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 justify-center items-center'>
                                <div className='m-auto'>
                                    <img src={webSocketsImg} alt='/' width='64px' height='64px' />
                                </div>
                                <div>
                                    <h3 className='flex flex-col items-center justify-center uppercase'>
                                         Web sockets    
                                    </h3>
                                </div>
                        </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills