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
        <h3 class="font-semibold text-gray-900 dark:text-white">Details</h3>
    </div>
    <div class="px-3 py-2">
       
<form>
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
    block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="name@gamil.com" required />
  </div>
  <div class="mb-6">
    
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
<textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300
 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 
 dark:focus:border-blue-500" placeholder="Describe your project..."></textarea>

  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 
      focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Terms and conditions</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

    </div>
    <div data-popper-arrow></div>
</div>

        </div>
    </section>
  )
}

export default LargeCard
