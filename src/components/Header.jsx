import React from 'react'
import { navLinks } from '../constants/constant';
import {LiaShoppingBagSolid} from 'react-icons/lia';
import {BiUser} from 'react-icons/bi';
import {FiSearch, FiBookmark} from 'react-icons/fi';

const Header = () => {
  return (
    <header className='container mx-auto px-16'>
    <nav className='flex justify-between items-center h-16'>
      <div className=''>
        <img src='../public/images/logo.png'/>
      </div>
      <div className='flex justify-around items-center'>
      <ul className="list-unstyled flex items-center flex-grow-1 text-gray-500 font-bold text-sm">
        {navLinks.map((link, index) => (
          <li key={index} className="me-4 cursor-pointer">
            {link.title}
          </li>
        ))}
      </ul>
      </div>
       <div className='flex justify-around items-center'>
      <ul className="list-unstyled flex items-center flex-grow-1">
          <li className="me-5">
          <FiSearch className='w-5 h-5 text-gray-500'/>
          </li>
          <li className="me-5">
          <FiBookmark className='w-5 h-5 text-gray-500'/>
          </li>
          <li className="me-5">
          <LiaShoppingBagSolid className='w-5 h-5 text-gray-500'/>
          </li>
            <li>
          <BiUser className='w-5 h-5 text-gray-500'/>
          </li>
      </ul>
      </div>
    </nav>
  </header>
  )
}

export default Header
