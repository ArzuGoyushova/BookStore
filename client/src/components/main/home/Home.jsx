import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
const Home = () => {
  return (
    <div className='container mx-auto px-16'>
      <div className='banner h-80 border'>
            <div className='banner-info w-1/2 py-20 pe-8 space-y-4'>
                <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-semibold'>
                The most read book of the month
                </h1>
                <p className='text-sm pe-36 text-gray-500'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
                </p>
                <button className='flex justify-center items-center border px-5 py-2 bg-orange-500'>
                Buy Now <BsArrowRight className='mx-4'/>
                </button>
            </div>
            <div className='banner-image w-1/2'>

            </div>
      </div>
    </div>
  )
}

export default Home
