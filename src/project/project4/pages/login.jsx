import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export default function Login() {

    const { loginWithPopup ,isAuthenticated,user,logout,getAccessTokenSilently} = useAuth0();


    // if(!isAuthenticated){
    //     return <button onClick={() => loginWithPopup()}>Login</button>
    // }

    // console.log(user);

    // const handleAPICall = async () => {
    //     const token = await getAccessTokenSilently({
    //         authorizationParams:{
    //             audience:'https://fakestoreapi.com/',
    //             scope:'read:current_user',
    //         },
    //     });
    //     console.log(token)
    // }
  return (
    <>
       {/* <button onClick={logout}>
         Log Out
       </button>
       <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <img src={user.picture}/>
        <button onClick={handleAPICall}>Token</button>
       </div> */}
       <button onClick={() => loginWithPopup()}>Login</button>
    </>
  )
}
