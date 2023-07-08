import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
        <h1>React Router</h1>
       <nav>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav> 
    </>
  )
}
