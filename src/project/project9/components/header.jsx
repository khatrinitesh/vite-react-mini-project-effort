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
            <NavLink to="/about/fname/lname" activeClassName="active">About</NavLink>
        </li>
        <li>
            <NavLink to="/service" activeClassName="active">Service</NavLink>
        </li>
        <li>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </li>
      </ul>
    </header>
  )
}
