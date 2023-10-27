import React from 'react'
import Ages from './Ages'
import AllBooksCategories from './AllBooksCategories'
import Authors from './Authors'
import Languages from './Languages'
import PriceRangeSlider from './PriceRangeSlider'
import { PiX } from 'react-icons/pi';
const Sidebar = ({ addFilter, removeFilter, clearAllFilters }) => {
  return (
    <div className='w-full border border-gray-800 p-4'>
      <p className='font-bold text-lg border-b pb-3 border-gray-800'>Categories</p>
      <p className='font-bold text-lg my-4'>Price</p>
      <PriceRangeSlider/>
      <p className='font-bold text-lg my-4'>All Books</p>
      <AllBooksCategories addFilter={addFilter} removeFilter={removeFilter}/>
      <p className='font-bold text-lg my-4'>Authors</p>
      <Authors addFilter={addFilter} removeFilter={removeFilter}/>
      <p className='font-bold text-lg my-4'>Language</p>
      <Languages addFilter={addFilter} removeFilter={removeFilter}/>
      <p className='font-bold text-lg my-4'>Age</p>
      <Ages addFilter={addFilter} removeFilter={removeFilter}/>
      <button className='w-full py-3 bg-orange-600 text-white my-3'>Apply</button>
      <button className='flex py-3 border border-gray-800 justify-center items-center w-full text-gray-600' onClick={clearAllFilters}><PiX className='me-3'/>Clear Filters</button>
    </div>
  )
}

export default Sidebar
