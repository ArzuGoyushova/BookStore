import React from 'react'
import { Link } from 'react-router-dom'
import CheckoutShoppingBag from '../components/main/checkout/CheckoutShoppingBag'
import CheckoutSteps from '../components/main/checkout/CheckoutSteps'

const Checkout = () => {
  return (
    <div className='container mx-auto px-16 my-5'>
         <div className='breadcrump text-sm my-8'>
                <Link className='' to='/home'>Home</Link>
                <span> / All Books </span>
                <span> / Book page </span>
                <span> / Shopping Bag </span>
                <span className='font-bold'> / Checkout </span>
            </div>
            <div className='flex justify-between'>
      <div className='w-1/2'><CheckoutSteps/></div>
      <div className='w-1/2'><CheckoutShoppingBag/></div>
      </div>
    </div>
  )
}

export default Checkout
