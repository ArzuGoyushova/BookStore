import React from 'react'

const Ads = () => {
  return (
    <div className='ads w-full flex items-center justify-around my-20 py-12'>
        <div className='text-center'>
          <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-bold'>100k</h1>
          <h3 className='md:text-xl lg:text-2xl sm:text-m font-bold'>Book Sales</h3>
        </div>
        <div className='text-center'>
          <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-bold'>10 +</h1>
          <h3 className='md:text-xl lg:text-2xl sm:text-m font-bold'>Sales Experience</h3>
        </div>
        <div className='text-center'>
          <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-bold'>30k</h1>
          <h3 className='md:text-xl lg:text-2xl sm:text-m font-bold'>Subscribers</h3>
        </div>
    </div>
  )
}

export default Ads
