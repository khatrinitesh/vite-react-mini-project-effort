import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
       <ul>
        <li>
            <NavLink activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/about/nitesh">About</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/service">Service</NavLink>
        </li>
        <li>
            <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </li>
       </ul>
    </header>
  )
}
