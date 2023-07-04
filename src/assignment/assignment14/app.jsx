import React from 'react'

export default function CustomApp() {
  return (
    <div>
      <Welcome text='nitesh khatri'/>
    </div>
  )
}


function Welcome(props){
    const {text } = props
    return(
        <>{text}</>
    )
}