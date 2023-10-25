import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/main/allBooks/Sidebar'

const AllBooks = () => {
  return (
    <div className='container mx-auto px-16 my-5'>
      <div className='breadcrump text-sm my-8'>
        <Link className='' to='/home'>Home</Link><span className='font-bold'> / All Books</span>
      </div>
      <div className='w-full flex'>
      <section className='w-1/3'>
        <Sidebar/>
      </section>
      <section className='w-2/3 border h-100'></section>
      </div>
    </div>
  )
}

export default AllBooks
