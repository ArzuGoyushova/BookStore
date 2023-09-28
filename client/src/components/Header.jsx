import React from 'react'
import { navLinks } from '../constants/constant';

const Header = () => {
  return (
    <header className='container mx-auto px-10'>
    <nav className='flex justify-between items-center border'>
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
    </nav>
  </header>
  )
}

export default Header
