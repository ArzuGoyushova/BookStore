import React, { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import AddToBag from '../AddToBag';

const Detail = ({ book, addToCart }) => {
  const [count, setCount] = useState(1);

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<AiFillStar key={i} />);
    }
    for (let i = count; i < 5; i++) {
      stars.push(<AiOutlineStar key={i} />);
    }
    return stars;
  };

  return (
    <div className='flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0'>
      {book ? (
        <>
          <div className='w-full md:w-2/5'>
            <img
              src={`./images/books/${book.imageUrl}`}
              alt={book.title}
              className='w-full max-w-2xl mx-auto md:mx-0'
            />
          </div>
          <div className='md:ms-8 w-full md:w-3/5'>
            <h3 className='lg:text-4xl md:text-2xl text-m mt-4 md:mt-0'>
              {book.title}
            </h3>
            <p className='text-gray-600 mt-2'>{book.author}</p>
            <div className='flex space-x-2 my-5 text-orange-600'>
              {renderStars(book.stars)}
            </div>
            <p className='font-bold my-2 lg:text-xl md:text-m text-m'>
              ${book.regularPrice}
            </p>
            <div className='flex md:flex-col md:flex-row md:space-y-4 space-x-16 mt-4'>
              <div className='space-y-3'>
                <p className='text-gray-500'>Genre: </p>
                <p className='text-gray-500'>Format: </p>
                <p className='text-gray-500'>Size: </p>
                <p className='text-gray-500'>Year: </p>
                <p className='text-gray-500'>Pages: </p>
                <p className='text-gray-500'>Language: </p>
              </div>
              <div className='space-y-3'>
                <p className='text-gray-800'>{book.genre}</p>
                <p className='text-gray-800'>{book.format}</p>
                <p className='text-gray-800'>{book.size}</p>
                <p className='text-gray-800'>{book.year}</p>
                <p className='text-gray-800'>{book.pages}</p>
                <p className='text-gray-800'>{book.language}</p>
              </div>
            </div>
            <div className='detail-buttons flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8 items-center md:items-start'>
              <div className='bg-gray-200 flex items-center'>
                <button
                  className='me-2 px-3 py-2 hover:bg-gray-400'
                  onClick={() => setCount(count - 1)}
                >
                  -
                </button>
                {count}
                <button
                  className='ms-2 px-3 py-2 hover:bg-gray-400'
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              <div className='bg-orange-600 hover:bg-orange-700 py-4 px-12'>
                <AddToBag book={book} addToCart={addToCart} />
              </div>
              <div>
                <button className='bg-orange-600 hover:bg-orange-700 text-white py-2 px-6 text-m flex items-center'>
                  <span className='me-2'>Buy Now</span>
                  <img src='./images/arrow-icon.png' alt='Arrow Icon' />
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Book not found</p>
      )}
    </div>
  );
};

export default Detail;
