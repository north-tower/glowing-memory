import React from 'react'

function Blog() {
  return (
    <div className='flex flex-wrap justify-between' >  
      <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink '>
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow cursor-pointer hover:scale-105 transform transition  p-2 rounded-md
     duration-300 ease-out
        md:flex-row md:max-w-xl  hover:bg-red-400">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Chin</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </a>
      </div>
      <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink  '>
        <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl cursor-pointer hover:scale-105 
        transform transition  p-2 rounded-md
     duration-300 ease-out
         hover:bg-red-400 ">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://flowbite.com/docs/images/blog/image-4.jpg" alt="" />
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy </h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </a>
      </div>
   
       
    </div>
  )
}

export default Blog