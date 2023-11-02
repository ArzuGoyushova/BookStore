import React from 'react';
import { BsBag } from 'react-icons/bs';

const AddToBag = ({ book, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(book);
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between">
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4"
          onClick={handleAddToCart}
        >
          Add to Bag <BsBag className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default AddToBag;
