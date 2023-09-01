import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 max-h-full bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
        >
          <div className='relative'>
         

            <img loading='lazy' src='https://i.postimg.cc/7ZnT3wm6/11.jpg' alt='' />
            <div className='absolute top-72 left-10 text-white p-2 '>
             <h1 className='text-4xl font-bold'>BUILDING YOUR DREAM TOGETHER</h1> 
             
             <div className='p-4 '>
             <button type="button" class="text-white bg-blue-700 m-2
              hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
               text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                About
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
            <button type="button" class="text-white bg-blue-700
              hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
               text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Services
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
             </div>
      
            </div>
          </div>

          <div className='relative'>
            <img loading='lazy' src='https://i.postimg.cc/fRN9SJ7p/12.jpg' alt='' />
            <div className='absolute top-72 left-10 text-white p-2 '>
             <h1 className='text-4xl font-bold'>AMAZING CONSTRUCTION THEME</h1> 
     
             <div className='p-4 '>
             <button type="button" class="text-white bg-blue-700 m-2
              hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
               text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Request a quote
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
            <button type="button" class="text-white bg-blue-700
              hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
               text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Contact us
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </button>
             </div>
             </div>
          </div> 

         {/* <div className='relative'>

            <img loading='lazy' src='https://i.postimg.cc/hPjH9YsL/troy-mortier-rns-F0vno-Mu-I-unsplash.jpg' alt='' />
            <div className='absolute top-0 right-0 bg-black text-white p-2'>
              Text Here
            </div>
          </div> */}
        </Carousel>
    </div>
  );
}

export default Banner;