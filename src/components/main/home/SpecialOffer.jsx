import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const SpecialOffer = () => {
  return (
    <div className='special-offers w-full flex flex-col md:flex-row items-center justify-around my-10 md:my-20 py-8 md:py-12'>
      <div className='w-full md:w-2/5 mb-4 md:mb-0'>
        <img className='w-full' src='./images/specialOffer/specialOffer.png' alt='Special Offer' />
      </div>
      <div className='w-full md:w-3/5 space-y-4 text-center md:text-left'>
        <p className='text-lg md:text-2xl text-gray-600'>Special Offers</p>
        <h2 className='text-xl md:text-4xl lg:text-6xl font-semibold'>
          Books 50% off now! Don’t miss such a deal!
        </h2>
        <p className='text-sm md:text-base text-gray-600'>
          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
        <button className='flex justify-center items-center ms-16 border px-5 py-2 bg-orange-600 text-white'>
          Buy Now <BsArrowRight className='mx-4' />
        </button>
      </div>
    </div>
  );
};

export default SpecialOffer;
