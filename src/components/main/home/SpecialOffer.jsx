import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SpecialOffer = () => {
  return (
    <div className='special-offers w-full flex flex-col md:flex-row items-center justify-around my-10 md:my-20 py-8 md:py-12 px-4'>
      <div className='w-full md:w-2/5 mb-4 md:mb-0'>
        <img className='w-full ps-8 md:ms-0' src='./images/specialOffer/specialOffer.png' alt='Special Offer' />
      </div>
      <div className='w-full md:w-3/5 space-y-4 text-center md:text-left'>
        <p className='text-lg md:text-2xl text-gray-600'>Special Offers</p>
        <h2 className='text-xl md:text-4xl lg:text-6xl font-semibold'>
          Books 50% off now! Don’t miss such a deal!
        </h2>
        <p className='text-sm md:text-base text-gray-600'>
          It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
        </p>
        <div className='ms-12 w-2/3 md:w-1/4 md:ms-0'>
        <Link to={`/book-detail/12`} className='flex justify-center items-center border px-5 py-2 bg-orange-600 text-white'>
          Buy Now <BsArrowRight className='mx-4' />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
