import React from 'react'
import { useContext } from 'react'
import B from './b'
import { AppContext } from './myContext'

export default function A() {
    const {name,setName,count,setCount} = useContext(AppContext)
  return (
    <div>
      <h1>A Parent</h1>
      {name} {count}
      <B/>
    </div>
  )
}
