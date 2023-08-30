import React, { useState , useEffect } from 'react'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid'
import { useDispatch } from 'react-redux';
import { addToBasket } from '@/slices/basketSlice';


const MAX_RATING = 5;
const MIN_RATING = 1;

export default function Product({id, title, price, description , category, image}) {
  
    const [rating, setRating] = useState(1);

    const [hasPrime, setHasPrime] = useState(true);
  
    useEffect(() => {
      setRating(
        Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
      );
      setHasPrime(Math.random() < 0.5);
    }, []);

    const dispatch = useDispatch();

    const addItemToBasket = () => {
        const product = {
            id,title,price,rating,description,category,image,hasPrime,
        };
        dispatch(addToBasket(product));
    };

    return (
        <div class="flex flex-wrap justify-between pt-6 -mx-6 p-3">
            
    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                            <Image src={image} class="w-full rounded-t pb-6" width={200} height={200} />
                            <p class="w-full text-gray-600 text-xs md:text-sm px-6">{category}</p>
                           
                            <div class="w-full font-bold text-xl text-gray-900 px-6">{title}</div>
                            <p class="text-gray-800 font-serif text-base px-6 mb-5">
                                {description}
                            </p>
                        </a>
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
