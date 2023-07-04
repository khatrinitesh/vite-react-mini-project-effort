import React from 'react'

export default function CustomApp() {

    
  return (
    <div>
      <Header title='head title'/>
    </div>
  )
}

function Header(props){
    return(
        <div>
            {props.title}
        </div>
    )
}