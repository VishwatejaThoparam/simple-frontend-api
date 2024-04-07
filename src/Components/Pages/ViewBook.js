// ViewBookPage.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function ViewBookPage() {
  const [book, setBook] = useState({
    title: "",
    author: ""
  });

  const { id } = useParams();

  useEffect(() => {
    loadBook();
  }, []);

  const loadBook = async () => {
    try {
      const result = await axios.get(`https://simple-backend-api-2w00.onrender.com/api/books/${id}`);
      setBook(result.data);
    } catch (error) {
      console.error('Error loading book:', error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">View Book</h2>
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
            <Link className="btn btn-success mx-2" to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
