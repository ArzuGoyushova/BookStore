import React, { useState, useEffect } from 'react';
import { BiX } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCartAction, updateQuantityAction } from '../../../redux/slices/cartSlice';

const ShoppingCart = () => {
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const updateTotal = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.regularPrice * item.quantity;
    });
    setTotal(totalPrice);
  };

  const removeFromCart = (bookId) => {
    dispatch(removeFromCartAction(bookId));
  };

  const updateQuantity = (bookId, newQuantity) => {
    dispatch(updateQuantityAction({ id: bookId, quantity: newQuantity })); 
  };

  useEffect(() => {
    updateTotal();
  }, [cart]);

  return (
    <>
      {cart.length === 0 ? (
        <p className='text-center pb-5'>You have no books in the basket.</p>
      ) : (
        <div>
      <div className="">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center my-4 border-t-2">
            <div className='w-1/5 mt-4'>
              <img className='w-60 h-40 object-contain bg-gray-100' src={`./images/books/${item.imageUrl}`} />
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
              <BiX className='w-8 h-8' />
            </button>
          </div>
        ))}
      </div>
      <div className='w-full border-t-2'>
        <div className='float-right'>
        <div className='flex justify-between w-48 mt-4'>
          <div className='flex flex-col space-y-2'>
            <span className='text-gray-600'>Books</span>
            <span className='text-gray-600'>Discount</span>
            <span className='text-gray-600'>Delivery</span>
            <span className='font-bold text-gray-800'>Total</span>
          </div>
          <div className='flex flex-col space-y-2'>
          <span className='text-gray-600'>${total.toFixed(2)}</span>
            <span className='text-gray-600'>0</span>
            <span className='text-gray-600'>$10</span>
            <span className='font-bold text-gray-800'>${(10 + total).toFixed(2)}</span>
          </div>
        </div>
        <Link to="/checkout"
          className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-12 mt-2 mb-5 text-m flex items-center "
        >
          <span className='me-2'>Checkout</span>
          <img src='./images/arrow-icon.png' />
        </Link>
        </div>
      </div>
      </div>
      )}
    </>
  );
};

export default ShoppingCart;
