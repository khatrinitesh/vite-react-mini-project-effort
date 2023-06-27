import React, { useState } from 'react'

export default function CustomApp() {

    const [count,setCount]  = useState({
        year:2023,
        month:5,
        day:'Saturday'
    })

   const updateCount = () => {
    setCount(prevCount => {
        return {...prevCount,year:2024,month:6,day:'Sunday'}
    })
   }
  return (
    <div>
      <button onClick={updateCount}>Update object</button>
      <span>Today's day is: {count.year}/{count.month}/{count.day}</span> 
    </div>
  )
}
