import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function OnProject({ image, title , id}) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition
     duration-300 ease-out'>
        <Link href={`/project/${id}`} >
        <div className='relative h-80 w-80' >
            <Image src={image} layout='fill' className='rounded-xl' />
        </div>
        <h3 className='text-2xl mt-3 hover:text-red-500'>{title}</h3>
        </Link>
        
    </div>
  )
}

export default OnProject