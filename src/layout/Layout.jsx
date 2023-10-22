import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../pages/Home'
const Layout = () => {
  return (
    <div>
      <Header/>
      <hr className="w-full h-0.5 mx-auto bg-gray-500"></hr>
      <main>
        <Home/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout