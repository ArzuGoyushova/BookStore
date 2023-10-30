import React, { useState, useEffect } from 'react';
import { PiX } from 'react-icons/pi';
import { BsChevronDown } from 'react-icons/bs';
import { books } from '../../../constants/constant';
import BookCard from './BookCard';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

const Content = ({ selectedFilters, removeFilter, clearAllFilters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const itemsPerPage = 12;
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const pageCount = Math.ceil(books.length / itemsPerPage);
    setPageCount(pageCount);
  }, []);

  const paginatedBooks = books.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="contentHeader flex justify-between mb-7">
        <div className="tags flex space-x-4 text-sm">
          {selectedFilters.map((filter) => (
            <div key={filter.id} className="tag flex px-2 py-1 bg-gray-200 items-center">
              {filter.name}
              <button
                onClick={() => removeFilter(filter)}
                className="tag-remove-button ms-2"
              >
                <PiX />
              </button>
            </div>
          ))}
          {selectedFilters.length > 0 && (
            <button
              onClick={clearAllFilters}
              className="clear-all-button px-2 py-1 bg-gray-200"
            >
              Clear all filters
            </button>
          )}
        </div>
        <div className="sortBy">
          <button className="px-2 py-1 flex gap-3 items-center text-sm">
            Sort By <BsChevronDown />
          </button>
        </div>
      </div>
    
      <div className="flex flex-wrap -mx-2">
        {paginatedBooks.map((book) => (
          <div key={book.id} className="w-full sm:w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <Link to={`/book-detail/${book.id}`}>
            <BookCard book={book} onBookClick={handleBookClick} />
            </Link>
           
          </div>
        ))}
      </div>
      <Pagination pageCount={pageCount} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default Content;
