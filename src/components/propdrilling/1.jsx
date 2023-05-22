import React from 'react'

export default function PropDrillingExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    const person = {
        name:'nitesh',
        age:34
    }
    return(
        <>
          {person.name} - {person.age}
        </>
    )
}

function Child(props){
    const {name,age} = props
    return(
        <>
         <h1>Hello, {name} - {age}</h1>
        </>
    )
}