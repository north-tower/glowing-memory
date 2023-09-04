import React from 'react'

function Team({ img, title, name}) {
  return (
      <div className='w-full md:w-1/2 p-6 flex flex-col flex-grow flex-shrink m-2'>
        <div className='cursor-pointer hover:scale-105 transform transition
        duration-300 ease-out'>
            <div className='relative h-80 w-60' >
                <svg class="absolute w-60 h-80 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
            </div>
            <h3 className='text-xl mt-3 hover:text-red-600 cursor-pointer'>{name}</h3>
            <h3 className='text-sm text-gray-500 mt-1'>{title}</h3>

        </div>
        </div>
  )
}

export default Team