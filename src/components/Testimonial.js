import React from 'react'

function Testimonial({ role,name,description, leading }) {
  return (
    <div>
        

    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{leading}</h3>
            <p class="my-4">{description}</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
        <svg class="rounded-full w-9 h-9 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>{name}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">{role}</div>
            </div>
        </figcaption>    
    </figure>
    


    </div>
  )
}

export default Testimonial