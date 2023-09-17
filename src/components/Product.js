import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';

const MAX_RATING=5;
const MIN_RATING=1;

function Product({id, title, price, description, category, image}) {

    const [rating, setRating] = useState(1);

  const [hasPrime, setHasPrime] = useState(true);

  useEffect(() => {
    setRating(
      Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
    );
    setHasPrime(Math.random() < 0.5);
  }, []);

  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
      <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

      <Image src={image} height={200} width={200} objectFit="contain"/>

      <h4 className='my-3'>{title}</h4>
      <div className='flex'>
      {Array(rating)
      .fill()
      .map((_,i) => (
        <StarIcon className='h-5 text-yellow-500'/>
      ))}
      </div>

     <p className='text-xs my-2 line-clamp-2'>{description}</p>

     <div className='mb-5'>
     <Currency quantity={price} currency='USD' />
     </div>

     {hasPrime && (
        <div className='flex items-center space-x-2 -mt-5'>
            <img className="w-12" src="data:image/png;base64,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" alt="" />
            <p className='text-xs text-gray-500'>FREE Next-day Delivery</p>
        </div>
     )}
     
     <button className='mt-auto button'>Add to Basket</button>
    </div>
  )
}

export default Product
