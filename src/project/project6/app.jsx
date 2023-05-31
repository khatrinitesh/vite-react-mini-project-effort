import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './custom.scss';

import "bootstrap/dist/css/bootstrap.css";

const Home = React.lazy(() => import('./pages/home'));
const About = React.lazy(() => import('./pages/about'));
const Service = React.lazy(() => import('./pages/service'));
const Portfolio = React.lazy(() => import('./pages/portfolio'));
const Contact = React.lazy(() => import('./pages/contact'));
const Error = React.lazy(() => import('./pages/error'));

const MainLayout = React.lazy(() => import('./main'));

export default function CustomApp() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/service" element={<Service/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
    </React.Suspense>
  )
}
