import React from 'react'
import AllBooksCategories from './AllBooksCategories'
import PriceRangeSlider from './PriceRangeSlider'

const Sidebar = () => {
  return (
    <div className='w-full border border-gray-800 p-4'>
      <p className='font-bold text-lg border-b pb-3 border-gray-800'>Categories</p>
      <p className='font-bold text-lg my-4'>Price</p>
      <PriceRangeSlider/>
      <p className='font-bold text-lg my-4'>All Books</p>
      <AllBooksCategories/>
      <p className='font-bold text-lg my-4'>Authors</p>
      
    </div>
  )
}

export default Sidebar
