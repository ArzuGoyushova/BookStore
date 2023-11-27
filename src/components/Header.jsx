import React, { useState } from 'react';
import { navLinks } from '../constants/constant';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { BiUser } from 'react-icons/bi';
import { FiSearch, FiBookmark } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { books } from '../constants/constant';

const Header = () => {
  const [displayInputBox, setDisplayInputBox] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  const bookmarkQuantity = useSelector((state) => state.bookmark.bookmarkQuantity);

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleDisplayInputBox = () => {
    setDisplayInputBox(!displayInputBox);
  };

  return (
    <header className='container mx-auto px-16'>
      <nav className='flex justify-between items-center h-16'>
        <div>
          <img src='../public/images/logo.png' alt="Logo" />
        </div>
        <div className='flex justify-around items-center'>
          <ul className="list-unstyled flex items-center flex-grow-1 text-gray-500 font-bold text-sm">
            {navLinks.map((link, index) => (
              <li key={index} className="me-4 cursor-pointer">
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex justify-around items-center'>
          <ul className="list-unstyled flex items-center flex-grow-1">
           <li className="me-5 relative">
              <FiSearch className='w-5 h-5 text-gray-500 cursor-pointer' onClick={handleDisplayInputBox} />
              <input
                className={`absolute border border-orange-500 focus:outline-orange-600 top-6 w-44 p-2 right-0 ${displayInputBox ? 'block' : 'hidden'}`}
                type="text"
                value={searchInput}
                onChange={(e) => handleSearchInput(e.target.value)}
              />
              {displayInputBox && (
                <div className="absolute top-16 z-10 right-0 scrollbar bg-white border border-gray-300 w-44 max-h-36 overflow-y-auto rounded">
                  {filteredBooks.map((book) => (
                    <div key={book.id} className="p-2 cursor-pointer hover:bg-gray-100">
                      {book.title}
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li className="me-5 relative">
            <Link to="/bookmark">
              <FiBookmark className='w-5 h-5 text-gray-500' />
              </Link>
              {bookmarkQuantity > 0 && (
                <div className="absolute top-3 right-0 bg-red-500 text-white rounded-full w-3 h-3 text-[8px] flex items-center justify-center">
                  {bookmarkQuantity}
                </div>
              )}
            </li>
            <li className="me-5 relative">
              <Link to="/basket">
                <LiaShoppingBagSolid className='w-5 h-5 text-gray-500' />
              </Link>
              {cartQuantity > 0 && (
                <div className="absolute top-3 right-0 bg-red-500 text-white rounded-full w-3 h-3 text-[8px] flex items-center justify-center">
                  {cartQuantity}
                </div>
              )}
            </li>
            <li>
              <Link to="/user">
              <BiUser className='w-5 h-5 text-gray-500' />
              </Link>
              
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
