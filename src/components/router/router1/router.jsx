import React from 'react';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Van from './pages/van';
import VanDetail from './pages/vandetail';

export default function RouterExample() {
  return (
    <Router>
        <header>
            <Link to="/">Logo</Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/van">Van</Link>
                    </li>
                </ul>
            </nav>
        </header>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/van" element={<Van/>}/>
        <Route path="/van/:id" element={<VanDetail/>}/>
      </Routes>
    </Router>
  )
}

