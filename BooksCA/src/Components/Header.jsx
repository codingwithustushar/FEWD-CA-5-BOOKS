import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`https://reactnd-books-api.udacity.com/books?q=${searchTerm}`, {
          headers: { 'Authorization': 'whatever-you-want' },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        setBooks(result.books);
      } catch (error) {
        setError(error.message);
      }
    };

    if (searchTerm.trim() !== '') {
      fetchBooks();
    }
  }, [searchTerm]);

  return (
    <div>
      <div className='Navbar'>
        <h1>KALVIUM BOOKS</h1>
        <input
          type='text'
          placeholder='🔎 Search Books'
          className='search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />
        <Link to='/register' className='register'>
          Register
        </Link>
      </div>

      <div className='Books'>
        {error && <p>Error: {error}</p>}
        {books.length > 0 && (
            <ul className="book-list">
            {books.map((book) => (
              <li key={book.id} className="book-container">
                <img
                  src={book.imageLinks.thumbnail} 
                  alt={book.title}
                  className='thumbnail'
                />
                <div className="book-info">
                  <h3>{book.title}</h3>
                  <p>{book.authors.join(', ')}</p>
                  <p className='rate'>★{book.averageRating} Free</p>
                  
                </div>
              </li>
            ))}
          </ul>
        )}
        {/* {books.length === 0 && !error && <p>No books found.</p>} */}
      </div>
    </div>
  );
}

export default Header;
