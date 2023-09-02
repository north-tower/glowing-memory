import React from 'react'
import  {PhoneIcon, MapPinIcon , EnvelopeIcon } from "@heroicons/react/24/solid"

function contact() {
  return (
    <div>
         <h3 className='absolute top-24 uppercase tracking-[20px] 
        text-gray-500 text-2xl pb-3'>
            Contact
        </h3>

        <div className='flex flex-col space-y-4'>
            <h4 className='font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='decoration-[#f7ab0a]/50 underline'>
                    Lets Talk.
                </span>
            </h4>

            <div className='space-y-2'>
                <div className='flex items-center space-x-5
                justify-center'>
                    <PhoneIcon className='text-[#f7ab0a] h-7
                     w-7 animate-pulse' />
                     <p className="">+254799229340</p>
                </div>

                <div className='flex items-center space-x-5
                justify-center'>
                    <EnvelopeIcon className='text-[#f7ab0a] h-7
                     w-7 animate-pulse' />
                     <p className="">muneshmyke@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5
                justify-center'>
                    <MapPinIcon className='text-[#f7ab0a] h-7
                     w-7 animate-pulse' />
                     <p className="">00100 Nairobi</p>
                </div>
            </div>
    </div>
    </div>
  )
}

export default contact