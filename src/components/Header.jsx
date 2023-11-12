import React, { useEffect } from 'react';
import { navLinks } from '../constants/constant';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { BiUser } from 'react-icons/bi';
import { FiSearch, FiBookmark } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);

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
            <li className="me-5">
              <FiSearch className='w-5 h-5 text-gray-500' />
            </li>
            <li className="me-5">
              <FiBookmark className='w-5 h-5 text-gray-500' />
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
              <BiUser className='w-5 h-5 text-gray-500' />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
