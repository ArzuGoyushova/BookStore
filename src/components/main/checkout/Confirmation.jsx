import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className='container mx-auto px-16 my-5'>
    <div className='breadcrump text-sm my-8'>
      <Link className='' to='/home'>Home</Link>
      <span> / All Books </span>
      <span> / Book page </span>
      <span> / Shopping Bag </span>
      <span> / Checkout </span>
      <span className='font-bold'> / Confirmation </span>
    </div>
    <div className='flex justify-center items-center flex-col my-16'>
        <IoCheckmark className='w-40 h-40 p-6 bg-orange-600 rounded-full text-white'/>
        <h1 className='text-6xl font-bold my-5'>Successfull!</h1>
        <p className='text-gray-500 text-2xl'>Your payment has been successfully processed</p>
        <button className="my-16 bg-orange-600 hover:bg-orange-700 text-white flex justify-center items-center p-3">
            <img className='me-3' src="./images/arrowLeft.png" alt="arrow left" />
            Continue To Shopping</button>
    </div>
    </div>
  )
}

export default Confirmation
