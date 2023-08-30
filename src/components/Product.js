import React, { useState , useEffect } from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux';
import { addToBasket } from '@/slices/basketSlice';
import Link from 'next/link';



export default function Product({id, title, price, description , category, image}) {
  
    
    return (
         <div class="flex flex-wrap justify-between pt-6 -mx-6 p-3">
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <Link href={`/project/${id}`} class="flex flex-wrap no-underline hover:no-underline">
                            <Image src={image} class="w-full rounded-t pb-6" width={300} height={300} />
                            <p class="w-full text-gray-600 text-xs md:text-sm px-6">{category}</p>
                           
                            <div class="w-full font-bold text-2xl text-gray-900 px-6">{title}</div>
                            <p class="text-gray-800 text-sm px-6 mb-5">
                                {description}
                            </p>
                        </Link>
                    </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div class="flex items-center justify-between">
                    <p class="text-gray-600 text-xs md:text-sm">2YEARS AGO</p>
                </div>
            </div>
                    
            </div>
        </div>
       
        

  )
}
