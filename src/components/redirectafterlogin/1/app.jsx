import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './login';
import Dashboard from './dashboard';

export default function CustomApp() {
  return (
    <Router>
        <Routes>
            <Route index element={<Login/>}></Route>
            <Route path="/dashboard" element={<Dashboard/>}></Route>
        </Routes>
    </Router>
  )
}
