import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './sass/main.scss'
import "bootstrap/dist/css/bootstrap.css";

import Header from './components/header';
import Home from './components/home';
import Posts from './components/posts';
import Users from './components/users';

export default function CustomApp() {
  return (
    <Router>
      <Header/>
      <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/users" element={<Users/>}/>
      </Routes>
    </Router>
  )
}
