// BooksPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    try {
      const response = await axios.get(`https://simple-backend-api-2w00.onrender.com/api/books/getAll`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error loading books:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`https://simple-backend-api-2w00.onrender.com/api/books/${id}`);
      loadBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className='container'>
      <div className='py-4'>
        <h1>Books</h1>
        <table className="table 5px border bg-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book.id}>
                <th scope="row">{index + 1}</th>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>
                  <Link className='btn btn-primary mx-2' to={`/viewbook/${book.id}`}>View</Link>
                  <Link className='btn btn-outline-dark mx-2' to={`/editbook/${book.id}`}>Edit</Link>
                  <button className='btn btn-danger mx-2' onClick={() => deleteBook(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
