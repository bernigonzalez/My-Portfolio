
import React from 'react';
import mobiImg from '../assets/projects/mobiATR.JPG'
import { RiRadioButtonFill } from 'react-icons/ri';


const mobi = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <img
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={mobiImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Furniture's Ecommerce</h2>
          <h3>React JS / Node JS / Postgres SQL</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
          As part of the final challenge at Henry's Bootcamp, we developed, in 3 weeks, an e-commerce that allows the publication and sale of furnitures. 
          It has a product catalog with sorting and product search filtering, real-time notifications, online chat ,review products, landing page, administrator panel to track sales and stock, gateway and payment methods with MercadoPago, Sign up/in with Google and much more.  
          </p>   
        <p>
            We worked under SCRUM methodologies and this is the result of a hard 7-junior-devs team work.
        </p>
        <p>
        The app was developed in Javascript, React, Redux, Express.js, Sequelize, PostgreSQL, WebSockets and many libraries in React such as JWT for the site's secure access and Bootstrap for giving style to the components.
        </p>
        <p>
        My main contribution to the project: Real-time Notifications, Online Chat, Detail Product, Carousel of recommended products, Product Recommendation section based on a Tensorflow.Js objetc-detection model, Review section, WhatsApp and MercadoPago API integration
        </p>
          <a
            href='https://mobi-app.netlify.app/home'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/bernigonzalez/Mobi-Ecommerce-React'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Front-End Code</button>
          </a>
          <a
            href='https://github.com/bernigonzalez/PF_Backend'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Back-End Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Postgres
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Web Sockets
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
            </div>
          </div>
        </div>
        <a href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </a>
      </div>
    </div>
  );
};

export default mobi;