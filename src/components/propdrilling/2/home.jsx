import React, { useEffect } from 'react'

export default function Home(props) {

    const arr = ['c','react','c+','node','javascript'];
    const obj = {name:'nitesh',designation:'frontend developer',phone:'9920767524'}

    useEffect(() => {
        props.event(arr,obj)
    },[props.data])
  return (
    <div>
      <h2>Welcome {props.data}</h2>
    </div>
  )
}
