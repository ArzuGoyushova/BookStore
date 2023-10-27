import React, { useState } from 'react';
import { BsBookmark } from 'react-icons/bs';

const BookCard = ({ book }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full max-w-sm overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={`./images/books/${book.imageUrl}`} alt={book.title} className="w-full" />
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
        <div className="font-bold text-xl mb-2">{book.title}</div>
        <p className="text-gray-700 text-base">{book.author}</p>
        <div className="mt-2 flex">
          {book.oldPrice > 0 && (
            <span className="text-red-500 line-through mr-2">${book.oldPrice}</span>
          )}
          {book.regularPrice > 0 && (
            <span className="">${book.regularPrice}</span>
          )}
        </div>
      </div>
      {isHovered && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
