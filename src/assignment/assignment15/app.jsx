import React from 'react'

export default function CustomApp() {
  return (
    <div>
      <Welcome text="nitesh khatri" myColor='blue'/>
    </div>
  )
}

function Welcome({text,myColor}){
    return(
        <>
         <h1 style={{color:myColor}}>{text}</h1>
        </>
    )
}