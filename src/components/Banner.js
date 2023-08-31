import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-16 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className='h-[800px]'
      >
        <div className='relative'>
          <img loading='lazy' src='https://i.postimg.cc/MKxDyfY1/maria-lupan-Xe-Rqsvi9q-Bc-unsplash-1.jpg' height={300} alt='' />
          <div className='absolute top-7 left-5 bg-black text-white p-2'>
            Text Here
          </div>
        </div>

        <div className='relative'>
          <img loading='lazy' src='https://i.postimg.cc/BnYKyjfL/samuel-sianipar-sc-UBcas-Svb-E-unsplash.jpg' alt='' />
          <div className='absolute top-0 right-0 bg-black text-white p-2'>
            Text Here
          </div>
        </div>

        <div className='relative'>
          <img loading='lazy' src='https://i.postimg.cc/qqBN7r86/dda13703-2595-441c-b13c-f6a35c80dd49.jpg' alt='' />
          <div className='absolute top-0 right-0 bg-black text-white p-2'>
            Text Here
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
