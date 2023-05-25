import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {

  const {user, isAuthenticated} = useAuth0()

  return (
    isAuthenticated && (<div> 
      <img src={user.picture} alt={user.name}/>
      <p>Name: {user.name}</p>
      <p>Username: {user.nickname}</p>
      <p>Email: {user.email}</p>
     </div>)
   )
}
