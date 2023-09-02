import React from 'react'
import Image from 'next/image'

function LargeCard({ img, title, description, buttonText}) {
  return (
    <section className='relative py-16 cursor-pointer'>
        <div className='relative h-96 min-w-[300px]'>
            <Image src={img} layout='fill' style={{objectFit:"cover"}} className='rounded-2xl'/>
        </div>

        <div className='absolute top-32 left-12'>
            <h3 className='text-4xl mb-3'>{title}</h3>
            
            <p className=''>{description}</p>
           
            
<button data-popover-target="popover-right" data-popover-placement="right"  type="button" class="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">{buttonText}</button>
<div data-popover id="popover-right" role="tooltip" class="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
    <div class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
        <h3 class="font-semibold text-gray-900 dark:text-white">{buttonText}</h3>
    </div>
    <div class="px-3 py-2">
        <p>And here's some amazing content. It's very engaging. Right?</p>
    </div>
    <div data-popper-arrow></div>
</div>

        </div>
    </section>
  )
}

export default LargeCard
