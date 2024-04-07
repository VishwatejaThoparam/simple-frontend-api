import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddBookPage() {
  let navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: ""
  });
  const { title, author } = book;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://simple-backend-api-2w00.onrender.com/api/books/add", book);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Book</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="md-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the title"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="md-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter the author"
                name="author"
                value={author}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary m-2">Submit</button>
            <Link to="/">
              <button className="btn btn-danger m-2">Cancel</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
