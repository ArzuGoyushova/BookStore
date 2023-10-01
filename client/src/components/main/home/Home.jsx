import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
const Home = () => {
  return (
    <div className='container mx-auto px-16 my-5'>
      <section className='banner w-full flex items-center'>
        <div className='banner-info w-1/2 py-20 pe-8 space-y-4'>
          <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-semibold'>
            The most read book of the month
          </h1>
          <p className='text-sm pe-36 text-gray-500'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <button className='flex justify-center items-center border px-5 py-2 bg-orange-600 text-white'>
            Buy Now <BsArrowRight className='mx-4' />
          </button>
        </div>
        <div className='banner-image w-1/2'>
          <img className='w-full' src="../public/images/books/banner.png" />
        </div>
      </section>
      <section className='services w-full flex items-center justify-around my-20'>
        <div className='flex flex-col items-center space-y-2'>
          <div className='bg-orange-100 px-6 py-8 rounded-full'>
            <img src='../src/assets/icons/truck-icon.png' alt='Truck Icon' />
          </div>
          <div className='text-center'>
            <h1 className='text-xl font-bold'>Free Shipping</h1>
            <p className='text-sm text-gray-500'>Order over $20</p>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <div className='bg-orange-100 p-7 rounded-full'>
            <img src='../src/assets/icons/price-icon.png' alt='Price Icon' />
          </div>
          <div className='text-center'>
            <h1 className='text-xl font-bold'>Best Price</h1>
            <p className='text-sm text-gray-500'>Guaranteed Price</p>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <div className='bg-orange-100 p-7 rounded-full'>
            <img src='../src/assets/icons/return-icon.png' alt='Return Icon' />
          </div>
          <div className='text-center'>
            <h1 className='text-xl font-bold'>Free Returns</h1>
            <p className='text-sm text-gray-500'>Within 30 days returns</p>
          </div>
        </div>
      </section>
      <section className='discounted w-full my-20'>
        <div className='flex items-center justify-between'>
        <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-semibold'>
            Our discounted books
          </h1>
        <a href="#" className='flex items-center'>
          <span className='me-2'>view all</span>
          <BsArrowRight/>
        </a>
        </div>
        <div className='flex items-center'>
        
        </div>
      </section>
    </div>
  )
}

export default Home
