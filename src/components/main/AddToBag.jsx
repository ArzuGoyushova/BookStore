import React, { useState } from 'react';
import { BsBag } from 'react-icons/bs';

const AddToBag = ({ book, addToCart }) => {
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(book);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 1000);
  };

  return (
    <div className="">
      <button
        className="bg-orange-600 hover:bg-orange-700 text-white text-sm py-2 px-2 flex justify-center items-center"
        onClick={handleAddToCart}
      >
        {addedToCart ? (
         <>
            Added!
          </>
        ) : (
          <>
            Add to Bag <BsBag className="ms-2 mb-1 w-3 h-3" />
          </>
        )}
      </button>
    </div>
  );
};

export default AddToBag;
