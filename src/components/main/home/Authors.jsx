import React from 'react'
import { authors } from '../../../constants/constant'
import { BsArrowRight, BsStarFill } from 'react-icons/bs'

const Authors = () => {
  return (
    <div className='authors w-full my-20'>
        <div className='flex items-center justify-between'>
        <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-semibold'>
           Favorite Authors
          </h1>
        <a href="#" className='flex items-center'>
          <span className='me-2'>view all</span>
          <BsArrowRight/>
        </a>
        </div>
        <div className='mt-12'>
            <div className='flex items-center justify-between'>
            {authors
            .slice(0, 5)
            .map((author) => (
              <div className='text-center'>
              <img className='rounded-full object-cover w-48 h-48 grayscale mb-5' src={`./images/authors/${author.imageUrl}`} />
              <span className='font-bold text-xl' key={author.id}>{author.name}</span>
              <div className="flex space-x-2 justify-center my-3">
      {Array(5).fill().map((_, index) => (
        <BsStarFill key={index} className='w-4 h-4 text-orange-500' />
      ))}
    </div></div>
            ))}
            </div>
            <div>
            </div>
          </div>
    </div>
  )
}

export default Authors
