import React from 'react'
import ShoppingCart from '../components/main/basket/ShoppingCart'

const ShoppingBag = () => {
  return (
    <div className='container mx-auto px-16 my-5'>
    <div className='breadcrump text-sm my-8'>
        <Link className='' to='/home'>Home</Link>
        <span className='font-bold'> / Shopping Bag</span>
    </div>
    <div>
      <ShoppingCart/>
      </div>
    </div>
  )
}

export default ShoppingBag
