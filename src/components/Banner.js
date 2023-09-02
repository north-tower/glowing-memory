import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/outline";
import { useRouter } from 'next/router';

function Banner() {
  const router = useRouter();

  const carouselItems = [
    {
      imageSrc: 'https://i.postimg.cc/7ZnT3wm6/11.jpg',
      title: 'BUILDING YOUR DREAM TOGETHER',
      buttonText1: 'About',
      buttonText2: 'Services',
    },
    {
      imageSrc: 'https://i.postimg.cc/fRN9SJ7p/12.jpg',
      title: 'AMAZING CONSTRUCTION THEME',
      buttonText1: 'Request a quote',
      buttonText2: 'Contact us',
    },
  ];

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
        {carouselItems.map((item, index) => (
          <div key={index} className='relative'>
            <img loading='lazy' src={item.imageSrc} alt='' />
            <div className='absolute inset-0 flex flex-col justify-center items-center text-white p-2 '>
              <h1 className='text-4xl font-bold text-center'>{item.title}</h1>
              <div className='p-4 space-x-4'>
                <button
                  type="button"
                  onClick={() => router.push("/about")}
                  className="banner-button"
                >
                  {item.buttonText1}
                </button>
                <button
                  type="button"
                  className="banner-button"
                >
                  {item.buttonText2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
