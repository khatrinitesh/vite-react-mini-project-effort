import { useTabContext } from '@material-ui/lab';
import React from 'react'
import { useState } from 'react'

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

function Example(){
    const [greeting,setGreeting]  = useState('welcome to react');
    const [isShow,setIsShow] = useState(true)
    return(
        <>
        <button onClick={handleToggle}>Toggle</button>
        <input type="text" value={greeting} onChange={handleChange}/>
         {isShow ? <Welcome text={greeting}/> : false}
        </>
    )
}

function Welcome({text}){
    return(
        <>
         {text}
        </>
    )
}