import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Home from '../components/main/home/Home'
const Layout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Home/>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout