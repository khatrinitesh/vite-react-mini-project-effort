import React from "react";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import Cards from "./card";
import Read from "./read";

function Main() {
  return (
    <>
    <Router>
        <Routes> 
            <Route path="/"  element={<Cards/>} />
            <Route path="/read" element={<Read/>} />
        </Routes>
      </Router>
    </>
  );
}

export default Main;