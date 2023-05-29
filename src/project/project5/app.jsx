import React,{useState} from 'react';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import './custom.scss';

// BELOW PAGES
const Home = React.lazy(() => import("./pages/home"));
const About = React.lazy(() => import("./pages/about"));
const Contact = React.lazy(() => import("./pages/contact"));
const Error = React.lazy(() => import("./pages/error"));
const Profile = React.lazy(() => import("./pages/profile"));
const Dashboard = React.lazy(() => import("./pages/dashboard"));

// const Service = React.lazy(() => import("./pages/service"));


export default function CustomApp() {

  let [loggedIn, setLoggedIn] = useState(null);

  function handleLogin(){
    setLoggedIn(true);
  }
  function handleLogout(){
    setLoggedIn(false);
  }
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
            <Routes>
            <Route path="/" element={
              loggedIn ? 
              <Navigate to="/dashboard"/> : 
              <Home login={handleLogin} />} 
            />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              {/* dashboard */}
              <Route
                path="dashboard"
                element={
                  loggedIn ? 
                  <Dashboard logout={handleLogout}/> : 
                  <Navigate to="/" state="From Dashboard" />}
              >
                <Route path="settings" element={<p>This is the nested Settings Route</p>}/>
              </Route>
              {/* profile */}
              <Route path="profile">
                <Route path=":userId" element={<Profile/>}/>
              </Route>
            <Route path="*" element={<Error />} />
          </Routes>
      </Router>
    </React.Suspense>
  )
}
