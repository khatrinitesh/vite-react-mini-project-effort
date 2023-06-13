import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './custom.scss';

const Home = React.lazy(()=> import('./pages/home'));
const About = React.lazy(()=> import('./pages/about'));
const Profile = React.lazy(()=> import('./pages/profile'));
const Contact = React.lazy(()=> import('./pages/contact'));
const PageNotFound = React.lazy(()=> import('./pages/pagenotfound'));

const MainLayout = React.lazy(()=> import('./mainlayout'));


export default function CustomApp() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index  element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </React.Suspense>
  )
}
