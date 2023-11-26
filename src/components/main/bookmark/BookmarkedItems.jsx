import React, { useEffect } from 'react';
import { BiX } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBookmarkAction } from '../../../redux/slices/bookmarkSlice';

const BookmarkedItems = () => {
    const bookmark = useSelector((state) => state.bookmark.bookmarkItems);
    const dispatch = useDispatch();

    const removeFromBookmark = (bookId) => {
        dispatch(removeFromBookmarkAction(bookId));
      };

      useEffect(() => {
      }, [bookmark]);

  return (
    <>
        <div className="">
        {bookmark.map((item) => (
          <div key={item.id} className="my-4 border">
            <p>{item.id}</p>
            <div className='w-1/5 mt-4'>
              <img className='w-60 h-40 object-contain bg-gray-100' src={`./images/books/${item.imageUrl}`} />
            </div>
            <div className='w-1/5'>
              <h3 className="md:text-xl text-m font-bold">{item.title}</h3>
              <p className="text-gray-500">{item.author}</p>
            </div>
            <button onClick={() => removeFromBookmark(item.id)} className="text-gray-800">
              <BiX className='w-8 h-8' />
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default BookmarkedItems
