import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AllBooks from '../pages/AllBooks';
import Home from '../pages/Home';

const Layout = () => {
  return (
    <div>
      <Header/>
      <hr className="w-full h-0.5 mx-auto bg-gray-500"></hr>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-books" element={<AllBooks />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
