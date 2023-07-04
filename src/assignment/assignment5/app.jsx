import React from 'react'

export default function CustomApp() {
  return (
    <div>
      <Parent/>
    </div>
  )
}

function Parent(){
    return(
        <>
        <Child name="nitesh" age='34'/>
        </>
    )
}

function Child({name,age}){
    return(
        <>
         {name} - {age}
        </>
    )
}