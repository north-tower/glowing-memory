import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function OnProject({ image, title, id , rating}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
      <Link href={`/project/${id}`}>
        <div className='relative h-80 w-80'>
          <Image src={image} layout='fill' className='rounded-xl' />
          {/* Add the span element with tailwind classes */}
          <span className="absolute top-2 left-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {rating}
          </span>
        </div>
        <h3 className='text-2xl mt-3 hover:text-red-500'>{title}</h3>
      </Link>
    </div>
  );
}

export default OnProject;
