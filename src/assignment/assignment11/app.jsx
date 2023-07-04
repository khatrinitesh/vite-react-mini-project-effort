import React from 'react'
import { useState } from 'react'

export default function CustomApp() {

    const [greeting,setGreeting] = useState('Welcome to react world');
    const [isShow,setIsShow] = useState(true);

    const handleChange = (event) => {
        setGreeting(event.target.value)
    }
    const handleToggle = () => {
        setIsShow(!isShow)
    }
  return (
    <div>
      <Button onClick={handleToggle} label="Toggle"/>
      <input type='text' value={greeting} onChange={handleChange}/>
      <br/>
      {isShow ? <Welcome text={greeting}/> : null}
    </div>
  )
}


const Button = ({label,onClick}) => {
    return(
        <>
         <button onClick={onClick} type="button">{label}</button>
        </>
    )
}

const Welcome = ({text}) => {
    return(
        <>{text}</>
    )
}