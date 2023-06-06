import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
            <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
            <NavLink to="/service" activeClassName="active">Service</NavLink>
        </li>
        <li>
            <NavLink to="/blog/:id" activeClassName="active">Blog</NavLink>
        </li>
        <li>
            <NavLink to="/user" activeClassName="active">User</NavLink>
        </li>
        <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}
