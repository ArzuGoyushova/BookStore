import React from 'react'
import BookmarkedItems from '../components/main/bookmark/BookmarkedItems'
import { Link } from 'react-router-dom'
const Bookmark = () => {
  return (
    <div className='container mx-auto px-16 my-5'>
        <div className='breadcrump text-sm my-8'>
        <Link className='' to='/home'>Home</Link>
        <span className='font-bold'> / Bookmarks</span>
    </div>
      <div>
      <BookmarkedItems/>
      </div>
    </div>
  )
}

export default Bookmark
