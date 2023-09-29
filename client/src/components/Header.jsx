import React from 'react'
import { navLinks } from '../constants/constant';
import {CiSearch, CiBookmark} from 'react-icons/ci';
import {LiaShoppingBagSolid} from 'react-icons/lia';
import {BiUser} from 'react-icons/bi';

const Header = () => {
  return (
    <header className='container mx-auto px-10'>
    <nav className='flex justify-between items-center border h-16'>
      <div className=''>
        <img src='../public/images/logo.png'/>
      </div>
      <div className='flex justify-around items-center'>
      <ul className="list-unstyled flex items-center flex-grow-1">
        {navLinks.map((link, index) => (
          <li key={index} className="me-4">
            {link.title}
          </li>
        ))}
      </ul>
      </div>
       <div className='flex justify-around items-center'>
      <ul className="list-unstyled flex items-center flex-grow-1">
      <li className="me-4">
          <CiSearch/>
          </li>
          <li className="me-4">
          <CiBookmark/>
          </li>
          <li className="me-4">
          <LiaShoppingBagSolid/>
          </li>
            <li className="me-4">
          <BiUser/>
          </li>
      </ul>
      </div>
    </nav>
  </header>
  )
}

export default Header
