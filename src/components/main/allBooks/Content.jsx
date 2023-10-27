import React from 'react';
import { PiX } from 'react-icons/pi';
import {BsChevronDown} from 'react-icons/bs'
import { books } from '../../../constants/constant';
import BookCard from './BookCard';

const Content = ({ selectedFilters, removeFilter, clearAllFilters }) => {
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
        <button
              className="px-2 py-1 flex gap-3 items-center text-sm"
            >
              Sort By <BsChevronDown/>
            </button>
        </div>
      </div>
      <div className='flex flex-wrap -mx-2'>
        {books.map((book)=>(
             <div key={book.id} className="w-full sm:w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
            <BookCard book={book}/>
            </div>
        ))}
      </div>
    </>
  );
};

export default Content;
