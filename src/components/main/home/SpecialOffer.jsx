import React from 'react';
import {BsArrowRight} from 'react-icons/bs';

const SpecialOffer = () => {
  return (
    <div className='special-offers w-full flex items-center justify-around my-20 py-12'>
   <div className='w-2/5'>
        <img src='./images/specialOffer/specialOffer.png'/>
   </div>
   <div className='w-3/5 space-y-4'>
    <p className='text-2xl text-gray-600'>Special Offers</p>
    <h2 className='md:text-4xl lg:text-6xl font-semibold'>Books 50% off now! Don’t miss such a deal!</h2>
    <p className=' text-gray-600'>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate which looks reasonable. The generated Lorem Ipsum is therefore
always free from repetition, injected humour, or non-characteristic words etc.
</p>
<button className='flex justify-center items-center border px-5 py-2 bg-orange-600 text-white'>
            Buy Now <BsArrowRight className='mx-4' />
          </button><button></button>
   </div>
</div>
  )
}

export default SpecialOffer
