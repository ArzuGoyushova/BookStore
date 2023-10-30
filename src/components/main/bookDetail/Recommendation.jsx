import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../allBooks/BookCard';
import { BsArrowRight } from 'react-icons/bs';

const Recommendation = ({ books }) => {
  const randomBookIndices = [];
  const count = 4; 
  while (randomBookIndices.length < count) {
    const randomIndex = Math.floor(Math.random() * books.length);

    if (!randomBookIndices.includes(randomIndex)) {
      randomBookIndices.push(randomIndex);
    }
  }

  const randomBooks = randomBookIndices.map((index) => books[index]);

  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  return (
    <>
     <div className='flex items-center justify-between mt-20'>
                <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-semibold'>
                   You might also like
                </h1>
                <a href="#" className='flex items-center'>
                    <span className='me-2'>view all</span>
                    <BsArrowRight />
                </a>
            </div>
    <div className="flex flex-wrap my-10">
      {randomBooks.map((book) => (
        <div key={book.id} className="w-full sm:w-full md:w-1/2 lg:w-1/4 px-2 mb-4">
          <Link to={`/book-detail/${book.id}`}>
            <BookCard book={book} onBookClick={handleBookClick} />
          </Link>
        </div>
      ))}
    </div>
    </>
  );
};

export default Recommendation;
