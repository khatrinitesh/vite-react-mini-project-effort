import React from 'react'

export default function CustomApp() {
  return (
    <div>
      <Welcome text="nitesh khatri"/>
    </div>
  )
}

const Welcome = (props) => {
    return(
        <>{props.text}</>
    )
}