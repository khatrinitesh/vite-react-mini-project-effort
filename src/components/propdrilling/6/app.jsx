import React, { useState } from 'react'

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

function Example(){

    const [on,setOn] = useState(false);
    
    const toggle = () => {
        setOn(o => !o)
    }
    return(
        <>
         <div>the button is on {on ? 'on' : 'off'}</div>  
         <button onClick={toggle}>Toggle {on ? 'on' : 'off'}</button>
        </>
    )
}