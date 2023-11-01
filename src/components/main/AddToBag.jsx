import React, { useState, useEffect } from 'react';
import { BsBag } from 'react-icons/bs';

const AddToBag = ({ book, onAddToBag }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToBag = () => {
    onAddToBag({
      book,
      quantity,
    });
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex items-center mb-4">
        <div className="flex-grow">
          <h2 className="font-semibold text-lg">{book.title}</h2>
          <p className="text-gray-700">{book.author}</p>
        </div>
        <div className="text-orange-600 font-semibold text-lg">
          ${book.regularPrice}
        </div>
      </div>
      <div className="flex items-center mb-4">
        <button
          className="bg-orange-600 text-white px-2 py-1 mr-2"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="text-lg">{quantity}</span>
        <button
          className="bg-orange-600 text-white px-2 py-1 ml-2"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4"
          onClick={handleAddToBag}
        >
          Add to Bag <BsBag className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default AddToBag;
