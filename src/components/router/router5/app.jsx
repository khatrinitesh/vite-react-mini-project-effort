import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './home';
import Post from './post';


export default function CustomApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post/:id" element={<Post/>}/>
      </Routes>
    </Router>
  )
}
