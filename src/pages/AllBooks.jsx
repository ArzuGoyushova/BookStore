import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../components/main/allBooks/Sidebar'
import Content from '../components/main/allBooks/Content'

const AllBooks = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const addFilter = (filter) => {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters((prevFilters) => [...prevFilters, filter]);
    }
  };

  const removeFilter = (filter) => {
    setSelectedFilters((prevFilters) => prevFilters.filter((f) => f !== filter));
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
  };

  return (
    <div className='container mx-auto px-16 my-5'>
      <div className='breadcrump text-sm my-8'>
        <Link className='' to='/home'>Home</Link><span className='font-bold'> / All Books</span>
      </div>
      <div className='w-full flex space-x-4'>
      <section className='w-1/3'>
        <Sidebar addFilter={addFilter} removeFilter={removeFilter}  clearAllFilters={clearAllFilters}/>
      </section>
      <section className='w-2/3'>
          <Content
            selectedFilters={selectedFilters}
            removeFilter={removeFilter}
            clearAllFilters={clearAllFilters}
          />
        </section>
      </div>
    </div>
  )
}

export default AllBooks
