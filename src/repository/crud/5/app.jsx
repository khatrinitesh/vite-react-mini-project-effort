import React from 'react';
import { BrowserRouter as Router, Route, Routes }
    from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";

import Create from './create';
import Edit from './edit';
import Home from './home';

export default function CustomApp() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/create" element={<Create/>}/>
            <Route path="/edit" element={<Edit/>}/>
        </Routes>
      </Router>
    </div>
  )
}
