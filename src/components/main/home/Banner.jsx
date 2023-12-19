import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='banner md:flex items-center'>
        <div className='banner-info w-full md:w-1/2 text-center md:text-left py-8 md:py-20 md:pe-8 space-y-4'>
          <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-semibold'>
            The most read book of the month
          </h1>
          <p className='text-sm md:pe-36 text-gray-500'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <button className='ms-4 md:ms-0 border px-5 py-2 bg-orange-600 text-white'>
          <Link className='flex justify-center items-center' to={`/book-detail/10`}>
            Buy Now <BsArrowRight className='mx-4' />
            </Link>
          </button>
        </div>
        <div className='banner-image w-full md:w-1/2'>
          <img className='w-full' src="./images/books/banner.png" />
        </div>
    </div>
  )
}

export default Banner
