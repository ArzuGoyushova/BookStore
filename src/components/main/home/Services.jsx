import React from 'react'

const Services = () => {
  return (
    <div className='services w-full flex items-center justify-around my-20'>
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
    </div>
  )
}

export default Services
