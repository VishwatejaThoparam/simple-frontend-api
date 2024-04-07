import React from 'react'
import { Link } from 'react-router-dom';

const  NavbarHeader = ()=>{
  return (
    <nav className="navbar navbar-expand-lg navbar bg-primary">  
    <div className="container-fluid">
        <a className="navbar-brand" href="/">Full Stack CRUD Book Application </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    <Link className='btn btn-outline-light' to='/addbook' >AddBook</Link>
    </nav>
  )
}

export default NavbarHeader;





