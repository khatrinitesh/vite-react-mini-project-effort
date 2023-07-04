import React from 'react'

export default function CustomApp() {
    const greeting= 'welcome to react world'
  return (
    <div>
      <Welcome text={greeting}/>
    </div>
  )
}

function Welcome({text}){
    return(
        <>
         {text}
        </>
    )
}