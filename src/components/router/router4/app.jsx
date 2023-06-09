import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Creature from './creature';
import CreatureDetail from './creaturedetail';

import Navbar from './nav';

export default function CustomApp() {
  return (
    <>
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/creature" element={<Creature/>}/>
        <Route path="/creature/:params" element={ <CreatureDetail/> }/>
      </Routes>
    </Router>
    </>
  )
}
