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
      route: "about"

    },
    {
      imageSrc: 'https://i.postimg.cc/fRN9SJ7p/12.jpg',
      title: 'AMAZING CONSTRUCTION THEME',
      buttonText1: 'Request a quote',
      buttonText2: 'Contact us',
      route: "contact"
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
                  onClick={() => router.push(`/${item.route}`)}
                  className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  {item.buttonText1}
                </button>
                <button
                  type="button"
                  className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
