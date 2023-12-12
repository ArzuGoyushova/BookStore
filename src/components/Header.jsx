import React, { useState } from 'react';
import { navLinks } from '../constants/constant';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { BiUser } from 'react-icons/bi';
import { FiSearch, FiBookmark, FiX, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { books } from '../constants/constant';

const Header = () => {
  const [displayInputBox, setDisplayInputBox] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  const bookmarkQuantity = useSelector((state) => state.bookmark.bookmarkQuantity);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  const handleDisplayInputBox = () => {
    setDisplayInputBox(!displayInputBox);
  };

 const handleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className='container mx-auto md:px-16 px-4'>
      <nav className='flex justify-between items-center h-16'>
        <div className='w-32 md:w-1/6'>
          <img src='./images/logo.png' alt="Logo" />
        </div>

        <div className='md:hidden ms-52 cursor-pointer'>
          {mobileMenuOpen ? (
            <FiX className='w-6 h-6 text-gray-500' onClick={handleMobileMenu} />
          ) : (
            <FiMenu className='w-6 h-6 text-gray-500' onClick={handleMobileMenu} />
          )}
        </div>

        <div className='hidden md:flex justify-around items-center'>
          <ul className="list-unstyled flex items-center flex-grow-1 text-gray-500 font-bold text-sm">
            {navLinks.map((link, index) => (
              <li key={index} className="me-4 cursor-pointer hover:text-orange-600">
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex justify-around items-center'>
          <ul className="list-unstyled flex items-center flex-grow-1">
           <li className="me-5 relative hidden md:flex">
              <FiSearch className='w-5 h-5 text-gray-500 cursor-pointer hover:text-orange-600' onClick={handleDisplayInputBox} />
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
            <li className="me-5 relative hidden md:flex">
            <Link to="/bookmark">
              <FiBookmark className='w-5 h-5 text-gray-500 hover:text-orange-600' />
              </Link>
              {bookmarkQuantity > 0 && (
                <div className="absolute top-3 right-0 bg-red-500 text-white rounded-full w-3 h-3 text-[8px] flex items-center justify-center">
                  {bookmarkQuantity}
                </div>
              )}
            </li>
            <li className="me-5 relative hidden md:flex">
              <Link to="/basket">
                <LiaShoppingBagSolid className='w-5 h-5 text-gray-500 hover:text-orange-600' />
              </Link>
              {cartQuantity > 0 && (
                <div className="absolute top-3 right-0 bg-red-500 text-white rounded-full w-3 h-3 text-[8px] flex items-center justify-center">
                  {cartQuantity}
                </div>
              )}
            </li>
            <li className="hidden md:flex">
              <Link to="/user">
              <BiUser className='w-5 h-5 text-gray-500 hover:text-orange-600' />
              </Link>
            </li>
          </ul>
        </div>
        {mobileMenuOpen && (
          <div className='md:hidden fixed top-16 left-0 w-full bg-gray-800 bg-opacity-50 z-50'>
            <div className='flex justify-center items-center'>
              <ul className='list-unstyled text-center'>
                {navLinks.map((link, index) => (
                  <li key={index} className="my-2">
                    <Link to={link.link} className='text-white'>{link.title}</Link>
                  </li>
                ))}
                <li className="my-2">
                  <Link to="/user" className='text-white'>
                   Login
                  </Link>
                </li>
                <li className="my-2 relative">
                  <Link to="/bookmark" className='text-white'>
                    Bookmarks
                  </Link>
                  {bookmarkQuantity > 0 && (
                    <div className="absolute top-1 right-0 bg-red-500 text-white rounded-full w-3 h-3 text-[8px] flex items-center justify-center">
                      {bookmarkQuantity}
                    </div>
                  )}
                </li>
                <li className="my-2 relative">
                  <Link to="/basket" className='text-white'>
                    Shopping Cart
                  </Link>
                  {cartQuantity > 0 && (
                    <div className="absolute top-1 right-0 bg-red-500 text-white rounded-full w-3 h-3 text-[8px] flex items-center justify-center">
                      {cartQuantity}
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
