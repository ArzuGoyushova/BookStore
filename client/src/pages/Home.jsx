import React, {useEffect, useState} from 'react'
import HomeContent from '../components/main/home/HomeContent'
import axios from 'axios';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetchBooks();
        fetchAuthors();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get("https://localhost:7183/api/Book");
            const books = response.data;
            setBooks(books);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };
    
    const fetchAuthors = async () => {
        try {
            const response = await axios.get("https://localhost:7183/api/Author");
            const authors = response.data;
            setAuthors(authors);
        } catch (error) {
            console.error("Error fetching authors:", error);
        }
    };
  return (
    <div>
      <HomeContent books={books} authors={authors}/>
    </div>
  )
}

export default Home
