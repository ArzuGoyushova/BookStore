import React, {useEffect, useState} from 'react'
import Ads from '../components/main/home/Ads';
import Authors from '../components/main/home/Authors';
import Banner from '../components/main/home/Banner';
import Categories from '../components/main/home/Categories';
import DiscountedBooks from '../components/main/home/DiscountedBooks';
import Services from '../components/main/home/Services';
import SocialMedia from '../components/main/home/SocialMedia';
import SpecialOffer from '../components/main/home/SpecialOffer';
import Subscribe from '../components/main/home/Subscribe';

const Home = () => {
  return (
    <div className='container mx-auto px-16 my-5'>
      <Banner/>
      <Services/>
      <DiscountedBooks/>
      <Ads/>
      <Categories/>
      <Authors/>
      <SpecialOffer/>
      <SocialMedia/>
      <Subscribe/>
    </div>
  )
}

export default Home
