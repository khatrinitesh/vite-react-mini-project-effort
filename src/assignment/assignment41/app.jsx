import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import Home from './home';
import User from './user';
import Profile from './profile';
import Account from './account';
import NoMatch from './nomatch';

import MainLayout from './layout';

export default function CustomApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="user" element={<User />}>
                <Route path="/user/profile" element={<Profile />} />
                <Route path="account" element={<Account />} />
            </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      
    </Router>
  )
}

