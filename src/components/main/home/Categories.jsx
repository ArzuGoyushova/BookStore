import React from 'react'
import { BsArrowLeft, BsArrowRight} from 'react-icons/bs'

const Categories = () => {
  return (
    <div className='categories w-full my-20'>
        <div className='flex items-center justify-between'>
        <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-semibold'>
            Popular Categories
          </h1>
        <a href="#" className='flex items-center space-x-2'>
          <BsArrowLeft/>
          <BsArrowRight/>
        </a>
        </div>
        <div className='flex items-center justify-between space-x-4 mt-5'>
          <div className='w-1/3 relative'>
          <img className='w-full' src='./images/category/Detective.png'/>
          <h3 className='absolute bottom-4 left-28 font-bold text-3xl'>Detective</h3>
          </div>
          <div className='w-1/3 relative'>
        <img className='w-full' src='./images/category/Romantic.png'/>
        <h3 className='absolute bottom-4 left-28 font-bold text-3xl'>Romantic</h3>
        </div>
        <div className='w-1/3 relative'>
        <img className='w-full' src='./images/category/Psychological.png'/>
        <h3 className='absolute bottom-4 left-24 font-bold text-3xl'>Psychological</h3>
        </div>
        </div>
    </div>
  )
}

export default Categories
