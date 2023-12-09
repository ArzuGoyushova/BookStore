import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromBookmarkAction } from '../../../redux/slices/bookmarkSlice';
import { Link } from 'react-router-dom';

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
      {bookmark.length === 0 ? (
        <p>You have no bookmarked books.</p>
      ) : (
        <div className="flex space-x-3 flex-wrap">
        {bookmark.map((item) => (
          <div key={item.id} className="border w-64 p-2">
            <div className=''>
              <img className='w-60 h-40 object-contain bg-gray-100' src={`./images/books/${item.imageUrl}`} />
            </div>
            <div className=''>
              <h3 className="md:text-xl text-m font-bold">{item.title}</h3>
              <p className="text-gray-500">{item.author}</p>
            </div>
            <div className='flex justify-between mt-4'>
            <button className="text-orange-500 px-5 py-1 border border-orange-500 hover:bg-orange-600 hover:text-white">
            <Link to={`/book-detail/${item.id}`}>
              Details
              </Link>
            </button>
            <button onClick={() => removeFromBookmark(item.id)} className="bg-orange-500 hover:bg-orange-600 px-5 py-1 border border-orange-500 text-white">
              Remove
            </button>
            </div>
          </div>
        ))}
        </div>
      )}
    </>
  )
}

export default BookmarkedItems
