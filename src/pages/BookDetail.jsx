import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { books } from '../constants/constant';
import Detail from '../components/main/bookDetail/Detail';
import Tabs from '../components/main/bookDetail/Tabs';
import Recommendation from '../components/main/bookDetail/Recommendation';

const BookDetail = () => {
    const { bookId } = useParams();

    const book = books.find((book) => book.id === bookId);
  
    return (
        <div className='container mx-auto px-16 my-5'>
            <div className='breadcrump text-sm my-8'>
                <Link className='' to='/home'>Home</Link>
                <span> / All Books</span>
                <span className='font-bold'> / Book page</span>
            </div>
           <Detail book={book}/>
           <Tabs book={book}/>
           <Recommendation books={books} />
        </div>
    );
};

export default BookDetail;
