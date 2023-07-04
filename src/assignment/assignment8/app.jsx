import React, { useState } from 'react'

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

function Example(){
    const greeting = 'welcome to react world'

    const [isShow,setIsShow] = useState(true);

    const handleToggle = () => {
        setIsShow(!isShow)
    }
    return(
        <>
        <button onClick={handleToggle}>Toggle</button>
         {isShow ? <Welcome text={greeting}/> : 'null'}
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