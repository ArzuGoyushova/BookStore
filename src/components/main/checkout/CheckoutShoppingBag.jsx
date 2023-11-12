import React, { useState, useEffect } from 'react';
import { BiX } from 'react-icons/bi';

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
      <div className="ms-20">
        <div>
            <span className='text-2xl'>Shopping Bag</span>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between my-2 border-b-2 pb-2">
              <div className='w-1/5'>
                <img className='w-40 h-24 object-contain bg-gray-100' src={`./images/books/${item.imageUrl}`} />
              </div>
              <div className='w-1/5'>
                <h3 className="md:text-xl text-m font-bold">{item.title}</h3>
                <p className="text-gray-500">{item.author}</p>
              </div>
              <div className='w-1/5 font-bold'>
                ${item.regularPrice}
              </div>
              <div className='w-1/5'>
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
                <span className="border border-gray-400 px-3 py-1 m-2">{item.quantity}</span>
                <button
                  className="font-bold"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="flex items-start text-gray-800">
                <BiX className='w-6 h-6' />
              </button>
            </div>
          ))}
        </div>
        <div className='w-full flex justify-between items-center my-4 gap-4'>
            <input
            type='text'
            placeholder='Discount code'
            className='p-2 border border-gray-400 w-4/5'
            />
          <button
            className="w-2/5 bg-orange-600 hover:bg-orange-700 text-white py-2 px-12 text-m"
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
