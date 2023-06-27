import React, { useState } from 'react'

export default function CustomApp() {
  return (
    <div>
      <Parent/>
      {/* <DummyContent name="nitesh khatri" a={10} b={20}/> */}
    </div>
  )
}

function Parent(){
    const [isParent,setIsParent] = useState(true)

    const handleToggle = () => {
        setIsParent(isParent => !isParent)
    }
    return(
        <>
         <Child isParent={isParent} changeIsParent={handleToggle}/>
        </>
    )
}
function Child(props){
    const {isParent,changeIsParent} = props
    return(
        <>
         {isParent ? "I am the child component of Parent.js" 
      : "There might be a bug"}
      <button onClick={changeIsParent}>Click me</button>
        </>
    )
}

function DummyContent(props){
    const sum = props.a + props.b 
    return(
        <>
        <p>My name is {props.name}</p>
        <p>The sum of the numeric props I received is {sum}</p>
        </>
    )
}