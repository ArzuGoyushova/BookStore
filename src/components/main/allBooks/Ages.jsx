import React, {useState} from 'react'
import { agesCategories } from '../../../constants/constant';

const Ages = ({ addFilter }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategorySelection = (category) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories((prevSelected) => prevSelected.filter((c) => c !== category));
        removeFilter(category); 
      } else {
        setSelectedCategories((prevSelected) => [...prevSelected, category]);
        addFilter(category);
      }
    };

  return (
    <div className="agesCategories space-y-2">
      {agesCategories.map((category) => (
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
          <label htmlFor={category.id}><span>{category.name}</span></label>
        </div>
      ))}
    </div>
  )
}

export default Ages
