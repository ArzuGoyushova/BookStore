import React, { useState, useEffect } from 'react';

const ShoppingCart = ({cart}) => {
  const removeFromCart = (bookId) => {
    const newCart = cart.filter((item) => item.id !== bookId);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between">
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
      {cart.map((item) => (
        <div key={item.id} className="flex justify-between items-center mt-4">
          <div>
            <h3 className="md:text-2xl text-xl">{item.title}</h3>
            <p className="text-gray-500">{item.author}</p>
          </div>
          <div>
            ${item.regularPrice} x {item.quantity}
          </div>
          <button onClick={() => removeFromCart(item.id)} className="text-red-500">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
