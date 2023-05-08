import React,{useState} from 'react'

export default function ConditionalRenderingExample() {
  return (
    <>
      <Example/>
    </>
  )
}


function Example(){
    return(
        <>
         <Two/>
        </>
    )
}

function Two(){
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return(
        <>
        {isLoggedIn && <h2>Welcome, User!</h2>}
        {!isLoggedIn && <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </>
    )
}

// function One(){
//     const [isLoggedIn,setIsLoggedIn] = useState(false);
//     return(
//         <>
//          {isLoggedIn ? (<h1>Welcome nitesh <button onClick={() => setIsLoggedIn(false)}>Logout</button></h1>) : (<button onClick={() => setIsLoggedIn(true)}>Login</button>)}
//         </>
//     )
// }