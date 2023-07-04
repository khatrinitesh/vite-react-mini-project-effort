import React from 'react'

export default function CustomApp() {
  return (
    <div>
      <Welcome title="nitesh khatri" desc="Lorem Ipsum is paragraph"/>
    </div>
  )
}

const Welcome = (props) => {
    return(
        <div style={{border: '1px solid black',
        height: '200px',
        width: '400px',}}>
            <Message {...props}/>
        </div>
    )
}

const Message = ({title,desc}) => {
    return(
        <>
         <h1>{title}</h1>
         <h1>{desc}</h1>
        </>
    )
}