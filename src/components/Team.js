import React from 'react'
import Product from './Product';


export default function Team({ products }) {
  return (
    <div class="container py-4 px-6 mx-auto" >

       
        <p className='text-md'>
            The CARLSCHE LIMITED management not only has the desire to succeed, but is bringing a wealth of knowledge and experience to the company team. The manager has over 8 years of experience in the management status and have both performed nearly all facets of daily operations of a rental business.

        </p>
    <div class="flex flex-wrap justify-between pt-12 -mx-6">
        
      <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-end px-4 pt-4">
          <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
    
        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="data:image/png;base64,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" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">General Manager</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none 
            focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
       </div>
    </div>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
        
        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="data:image/png;base64,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" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie White</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">accountant</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none 
            focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
</div>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-3">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 
        focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
            </svg>
        </button>
       
        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="data:image/png;base64,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" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Sales and supplies officers</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none 
            focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
</div>
</div>
</div>
  );
}

