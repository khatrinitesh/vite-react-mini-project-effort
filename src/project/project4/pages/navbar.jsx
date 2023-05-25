import React from 'react';
import {useAuth0} from '@auth0/auth0-react';
import Login from './login';
import Logout from './logout';
import Profile from './profile';

export default function Navbar() {
    const {isAuthenticated} = useAuth0()
  return (
    <>
     { isAuthenticated ? <Logout/> :  <Login/> } 
     <Profile/>
    </>
  )
}
