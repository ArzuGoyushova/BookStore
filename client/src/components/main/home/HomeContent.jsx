import React, {useEffect} from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const HomeContent = ({books, authors}) => {

useEffect(()=>{
},[books, authors]);

const firstFourBooks = books.slice(0, 4);

  return (
    <div className='container mx-auto px-16 my-5'>
      <section className='banner w-full flex items-center'>
        <div className='banner-info w-1/2 py-20 pe-8 space-y-4'>
          <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-semibold'>
            The most read book of the month
          </h1>
          <p className='text-sm pe-36 text-gray-500'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>
          <button className='flex justify-center items-center border px-5 py-2 bg-orange-600 text-white'>
            Buy Now <BsArrowRight className='mx-4' />
          </button>
        </div>
        <div className='banner-image w-1/2'>
          <img className='w-full' src="../public/images/books/banner.png" />
        </div>
      </section>
      <section className='services w-full flex items-center justify-around my-20'>
        <div className='flex flex-col items-center space-y-2'>
          <div className='bg-orange-100 px-6 py-8 rounded-full'>
            <img src='../src/assets/icons/truck-icon.png' alt='Truck Icon' />
          </div>
          <div className='text-center'>
            <h1 className='text-xl font-bold'>Free Shipping</h1>
            <p className='text-sm text-gray-500'>Order over $20</p>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <div className='bg-orange-100 p-7 rounded-full'>
            <img src='../src/assets/icons/price-icon.png' alt='Price Icon' />
          </div>
          <div className='text-center'>
            <h1 className='text-xl font-bold'>Best Price</h1>
            <p className='text-sm text-gray-500'>Guaranteed Price</p>
          </div>
        </div>
        <div className='flex flex-col items-center space-y-2'>
          <div className='bg-orange-100 p-7 rounded-full'>
            <img src='../src/assets/icons/return-icon.png' alt='Return Icon' />
          </div>
          <div className='text-center'>
            <h1 className='text-xl font-bold'>Free Returns</h1>
            <p className='text-sm text-gray-500'>Within 30 days returns</p>
          </div>
        </div>
      </section>
      <section className='discounted w-full my-20'>
        <div className='flex items-center justify-between'>
        <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-semibold'>
            Our discounted books
          </h1>
        <a href="#" className='flex items-center'>
          <span className='me-2'>view all</span>
          <BsArrowRight/>
        </a>
        </div>
        <div className='flex items-center'>
        <ul className="space-x-6 flex justify-between w-full mt-8">
  {firstFourBooks.map((book, index) => (
    <li className='' key={book.id}>
      <a>
        <img className="w-full" src={`/images/books/${book.imageUrls[0]}`} alt={book.title} />
        <p className="font-bold mt-4">{book.title}</p>
        <p className="mt-1">
          {authors
            .filter((author) => author.id === book.authorId)
            .map((matchingAuthor) => (
              <span className='text-gray-500' key={matchingAuthor.id}>{matchingAuthor.fullName}</span>
            ))}
        </p>
        {book.oldPrice ? (
          <div>
            <span className='line-through text-gray-500 me-2 mt-2'>${book.oldPrice}</span>
            <span className='text-red-500'>${book.regularPrice}</span>
          </div>
        ) : (
          <span className='text-gray-500'>${book.regularPrice}</span>
        )}
      </a>
    </li>
  ))}
</ul>


        </div>
      </section>
      <section className='ads w-full flex items-center justify-around my-20 py-12'>
        <div className='text-center'>
          <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-bold'>100k</h1>
          <h3 className='md:text-xl lg:text-2xl sm:text-m font-bold'>Book Sales</h3>
        </div>
        <div className='text-center'>
          <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-bold'>10 +</h1>
          <h3 className='md:text-xl lg:text-2xl sm:text-m font-bold'>Sales Experience</h3>
        </div>
        <div className='text-center'>
          <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-bold'>30k</h1>
          <h3 className='md:text-xl lg:text-2xl sm:text-m font-bold'>Subscribers</h3>
        </div>
      </section>
      <section className='categories w-full my-20'>
        <div className='flex items-center justify-between'>
        <h1 className='md:text-4xl lg:text-6xl sm:text-xl font-semibold'>
            Popular Categories
          </h1>
        <a href="#" className='flex items-center space-x-2'>
          <BsArrowLeft/>
          <BsArrowRight/>
        </a>
        </div>
        <div className='flex items-center justify-between space-x-4 mt-5'>
          <div className='w-1/3 relative'>
          <img className='w-full' src='/images/category/Detective.png'/>
          <h3 className='absolute bottom-4 left-28 font-bold text-3xl'>Detective</h3>
          </div>
          <div className='w-1/3 relative'>
        <img className='w-full' src='/images/category/Romantic.png'/>
        <h3 className='absolute bottom-4 left-28 font-bold text-3xl'>Romantic</h3>
        </div>
        <div className='w-1/3 relative'>
        <img className='w-full' src='/images/category/Psychological.png'/>
        <h3 className='absolute bottom-4 left-24 font-bold text-3xl'>Psychological</h3>
        </div>
        </div>
      </section>
    </div>
  )
}

export default HomeContent
