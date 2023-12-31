import React, { useState, useEffect } from 'react';
import { PiX } from 'react-icons/pi';
import { BsChevronDown } from 'react-icons/bs';
import { books } from '../../../constants/constant';
import BookCard from './BookCard';
import Pagination from './Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { addToCartAction } from '../../../redux/slices/cartSlice';
import { addToBookmarkAction } from '../../../redux/slices/bookmarkSlice';
import SortBy from './SortBy';


const Content = ({ selectedFilters, removeFilter, clearAllFilters }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState();
  const itemsPerPage = 12;
  const [selectedBook, setSelectedBook] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const bookmark = useSelector((state) => state.bookmark);

  const addToCart = (book) => {
    dispatch(addToCartAction(book)); 
  }; 
  const addToBookmark = (book) => {
    dispatch(addToBookmarkAction(book)); 
  }; 
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
      <div className="contentHeader flex justify-between mb-7 mt-10 md:mt-0 border-t-2 md:border-t-0">
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
        <div>
         <SortBy/>
        </div>
      </div>
    
      <div className="flex flex-wrap -mx-2">
        {paginatedBooks.map((book) => (
          <div key={book.id} className="w-full sm:w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <BookCard book={book} onBookClick={handleBookClick} addToCart={addToCart} addToBookmark={addToBookmark} />
          </div>
        ))}
      </div>
      <Pagination pageCount={pageCount} currentPage={currentPage} onPageChange={handlePageChange} />
    </>
  );
};

export default Content;
