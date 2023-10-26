import React, {useState} from 'react'
import { languagesCategories } from '../../../constants/constant';

const Languages = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);

    const toggleCategorySelection = (category) => {
      setSelectedCategories((prevSelected) => {
        if (prevSelected.includes(category)) {
          return prevSelected.filter((c) => c !== category);
        } else {
          return [...prevSelected, category];
        }
      });
    };

  return (
    <div className="languagesCategories space-y-2">
      {languagesCategories.map((category) => (
        <div key={category.id} className="flex items-center">
          <input
            type="checkbox"
            id={category.id}
            checked={selectedCategories.includes(category)}
            onChange={() => toggleCategorySelection(category)}
            className="mr-4 w-4 h-4 accent-orange-600"
          />
          <label htmlFor={category.id}><span>{category.name}</span></label>
        </div>
      ))}
    </div>
  )
}

export default Languages
