import React from 'react'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Swal from "sweetalert2";


function Contact() {

    const handleSendMessage = (e) => {
        e.preventDefault()
        
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your message has been sent!",
          showConfirmButton: true,
          timer: 3000,
        }).then(function() {
          window.location = "/"  
        });
    
      }

  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-indigo-700'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
            {/* left-side  */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://ak.picdn.net/shutterstock/videos/1033204736/thumb/1.jpg" alt='/' />
                        </div>
                        <div>
                            <h2 className='py-2 text-indigo-700'>Bernardo Gonzalez</h2>
                            <p>Full-Stack Developer</p>
                            <p className='py-6'>I'm available for freelance or full-time positions. Let's talk. </p>
                        </div>
                        <div>
                            <p className='uppercase text-center pt-4'>Connect with me</p>
                            <div className='flex items-center justify-center gap-10 py-4 '>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <a href='https://www.linkedin.com/in/bernardo-gonzalez-/'>
                                    <FaLinkedinIn className='text-indigo-700'/>  
                                </a>
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <a href='https://github.com/bernigonzalez'>
                                    <FaGithub className='text-indigo-700'/>
                                </a>
                            </div>
                            {/* <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail />
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            {/* right-side  */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='Uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-indigo-700' type="text" />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='Uppercase text-sm py-2'>Phone Number</label>
                                    <input className='border-2 rounded-lg p-3 flex border-indigo-700' type="text" />
                                </div>
                            </div>

                            <div className='flex flex-col py-2'>
                                    <label className='Uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-indigo-700' type="email" />
                            </div>

                            <div className='flex flex-col py-2'>
                                    <label className='Uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-indigo-700' type="text" />
                            </div>

                            <div className='flex flex-col py-2'>
                                    <label className='Uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-indigo-700' rows="10" type="text" />
                            </div>
                            <button onClick={handleSendMessage} className='w-full p-4 text-gray-100 mt-4 '>Send Message</button>
                        </form>
                    </div>
                </div>    
            </div>
            <div className='flex justify-center py-12'>
                <a href='/#main'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-indigo-700' size={30}/>
                    </div>  
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact