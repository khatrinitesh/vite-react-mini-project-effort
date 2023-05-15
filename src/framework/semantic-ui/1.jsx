import React from 'react';
import './style.scss';
import 'semantic-ui-css/semantic.min.css';

import Create from './create';
import Read from './read';
import Update from './update';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'


export default function SemanticExample() {
  return (
    <>
      <Router>
      <div className="main">
        <Routes>
            <Route path='/create' element={<Create/>} />
            <Route path='/read' element={<Read/>} />
            <Route path='/update' element={<Update/>} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

