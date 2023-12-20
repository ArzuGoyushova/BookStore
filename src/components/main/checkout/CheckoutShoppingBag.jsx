import React, { useState, useEffect } from 'react';
import { BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const CheckoutShoppingBag = () => {
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
  
    const updateTotal = () => {
      let totalPrice = 0;
      cart.forEach((item) => {
        totalPrice += item.regularPrice * item.quantity;
      });
      setTotal(totalPrice);
    };
  
    const removeFromCart = (bookId) => {
      const newCart = cart.filter((item) => item.id !== bookId);
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    };
  
    const updateQuantity = (bookId, newQuantity) => {
      const updatedCart = cart.map((item) => {
        if (item.id === bookId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
  
    useEffect(() => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }, []);
  
    useEffect(() => {
      updateTotal();
    }, [cart]);
  
    return (
      <div className="md:ms-20">
        <div>
          <div className='flex justify-between items-center'>
            <span className='text-2xl hidden md:flex'>Shopping Bag</span>
            <Link className='underline text-blue-800 text-lg' to="/basket">Edit Bag</Link>
            </div>
          {cart.map((item) => (
            <div key={item.id} className="md:flex justify-between my-2 border-b-2 pb-2 space-y-4">
              <div className='md:w-1/5 w-full'>
                <img className=' w-full md:w-40 h-24 object-contain bg-gray-100' src={`./images/books/${item.imageUrl}`} />
              </div>
              <div className='md:w-1/5'>
                <h3 className="md:text-xl text-m font-bold">{item.title}</h3>
                <p className="text-gray-500">{item.author}</p>
              </div>
              <div className='md:w-2/5 flex justify-between items-start border p-2 md:border-0 md:p-0'>
           
              <div className='md:w-1/3 md:flex'>
                <button
                  className="font-bold"
                  onClick={() => {
                    if (item.quantity > 1) {
                      updateQuantity(item.id, item.quantity - 1);
                    }
                  }}
                >
                  -
                </button>
                <span className="border border-gray-400 px-3 mx-2">{item.quantity}</span>
                <button
                  className="font-bold"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className='md:w-1/3 font-bold'>
                ${item.regularPrice}
              </div>
              <button onClick={() => removeFromCart(item.id)} className="flex items-start text-gray-800">
                <BiX className='w-6 h-6' />
              </button>
              </div>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-between items-center my-4 gap-4'>
            <input
            type='text'
            placeholder='Discount code'
            className='p-2 border border-gray-400 w-2/3 md:w-3/5'
            />
          <button
            className="w-1/3 md:w-2/5 bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 md:px-12 text-m"
          >
            <span>Apply</span>
          </button>
          </div>
        <div className='w-full'>
          <div className='flex justify-between mt-4'>
            <div className='flex flex-col space-y-2'>
              <span className='text-gray-600'>Before discount</span>
              <span className='text-gray-600'>Discount</span>
              <span className='text-gray-600'>Discount code</span>
              <span className='text-gray-600'>Shipping</span>
              <span className='font-bold text-gray-800'>Total</span>
            </div>
            <div className='flex flex-col space-y-2 items-end'>
            <span className='text-gray-600'>${total.toFixed(2)}</span>
              <span className='text-gray-600'>0</span>
              <span className='text-gray-600'>0</span>
              <span className='text-gray-600'>$10</span>
              <span className='font-bold text-gray-800'>${(10 + total).toFixed(2)}</span>
            </div>
          </div>
          </div>
      </div>
    );
  };
  

export default CheckoutShoppingBag
