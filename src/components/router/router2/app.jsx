import {BrowserRouter as Router, NavLink, Routes, Route} from 'react-router-dom'
import React from 'react';
import './custom.scss';


import Home from './home';
import Search from './search';
import Courses from './courses';
import List from './list';

export default function CustomApp() {
  return (
    <Router>
      <nav>
        <ul>
            <li>
                <NavLink to="/" activeClass="active">Home</NavLink>
                <NavLink to="/courses" activeClass="active">Courses</NavLink>
            </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<Home/>}/> 
        <Route path="/courses" element={<Courses/>}>
            <Route path="search" element={<Search/>}/>
            <Route path="list" element={<List/>}/>
        </Route>
      </Routes>
    </Router>
  )
}
