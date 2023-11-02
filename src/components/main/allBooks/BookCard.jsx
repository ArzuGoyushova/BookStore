import React, { useState } from 'react';
import { BsBookmark, BsBag } from 'react-icons/bs';
import AddToBag from '../AddToBag';
import ShoppingCart from '../basket/ShoppingCart';

const BookCard =  ({ book, onBookClick, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleBookClick = () => {
    onBookClick(book);
  };

  
  return (
    <div
      onClick={handleBookClick}
      className="w-full max-w-sm overflow-hidden relative "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={`../images/books/${book.imageUrl}`} alt={book.title} className="w-full" />
        {isHovered && (
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        )}
        <button className="absolute top-0 right-0 m-2 p-2 text-gray-800">
          <BsBookmark />
        </button>
        {book.discount > 0 && (
          <div className="absolute top-0 left-0 m-2 px-2 py-1 bg-orange-600 text-white">
            {book.discount}% OFF
          </div>
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-semibold text-lg mb-1" onClick={handleBookClick}>
          {book.title}
        </div>
        <p className="text-gray-700">{book.author}</p>
        <div className="mt-1 flex">
          {book.oldPrice > 0 && (
            <span className="text-red-500 line-through mr-2">${book.oldPrice}</span>
          )}
          {book.regularPrice > 0 && (
            <span className="">${book.regularPrice}</span>
          )}
        </div>
      </div>
      {isHovered && (
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <AddToBag book={book} addToCart={addToCart} /> {/* Pass addToCart prop to AddToBag component */}
        </div>
      )}

    </div>
  );
};

export default BookCard;
