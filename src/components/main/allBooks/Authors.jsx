import React, { useState } from 'react';
import { authorsCategories } from '../../../constants/constant';
import SearchBox from './SearchBox';

const Authors = ({ addFilter, removeFilter }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategorySelection = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevSelected) => prevSelected.filter((c) => c !== category));
      removeFilter(category); 
    } else {
      setSelectedCategories((prevSelected) => [...prevSelected, category]);
      addFilter(category);
    }
  };

  const filteredCategories = authorsCategories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SearchBox setSearchQuery={setSearchQuery} />
      <div className="authorsCategories h-64 overflow-y-auto space-y-2 scrollbar">
        {filteredCategories.map((category) => (
          <div key={category.id} className="flex items-center">
            <input
              type="checkbox"
              id={category.id}
              checked={selectedCategories.includes(category)}
              onChange={() => {
                toggleCategorySelection(category);
              }}
              className="mr-4 w-4 h-4 accent-orange-600"
            />
            <label htmlFor={category.id}>
              <span>{category.name}</span>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Authors;
