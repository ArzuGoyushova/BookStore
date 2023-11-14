import React, { useState } from 'react';
import { BsBookmark, BsCheck } from 'react-icons/bs';

const AddToBookmarked = ({ book, addToBookmarked }) => {
  const [addedToBookmarked, setAddedToBookmarked] = useState(false);

  const handleAddToBookmarked = () => {
    addToBookmarked(book);
    setAddedToBookmarked(true);
    setTimeout(() => {
      setAddedToBookmarked(false);
    }, 1000);
  };

  return (
    <div className="">
      <button
        className="bg-orange-600 hover:bg-orange-700 text-white text-sm py-2 px-2 flex justify-center items-center"
        onClick={handleAddToBookmarked}
      >
        {addedToBookmarked ? (
          <>
            <BsCheck/>
          </>
        ) : (
          <>
            <BsBookmark />
          </>
        )}
      </button>
    </div>
  );
};

export default AddToBookmarked;
