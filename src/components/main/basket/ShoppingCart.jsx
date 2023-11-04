import React, { useState, useEffect } from 'react';
import { BiX } from 'react-icons/bi';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);

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

  return (
    <div className="">
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center mt-4 border-t-2">
          <div className='w-1/5 mt-4'>
          <img className='w-60 h-40 object-contain bg-gray-100' src={`./images/books/${item.imageUrl}`}/>
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
          <button onClick={() => removeFromCart(item.id)} className="text-gray-800">
           <BiX className='w-8 h-8'/>
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
