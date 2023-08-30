import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner() {
  return (
    <div className='relative'>
      <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div className='relative'>
          <img loading='lazy' src='https://i.postimg.cc/9MWNWPPZ/7.jpg' alt='' />
          <div className='absolute top-7 left-5 bg-black text-white p-2'>
            Text Here
          </div>
        </div>

        <div className='relative'>
          <img loading='lazy' src='https://i.postimg.cc/XYf8pGY8/19.jpg' alt='' />
          <div className='absolute top-0 right-0 bg-black text-white p-2'>
            Text Here
          </div>
        </div>

        <div className='relative'>
          <img loading='lazy' src='https://i.postimg.cc/qvVwJX4q/16.jpg' alt='' />
          <div className='absolute top-0 right-0 bg-black text-white p-2'>
            Text Here
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
