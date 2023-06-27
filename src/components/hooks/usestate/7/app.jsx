import React from 'react'
import { useState } from 'react'

export default function CustomApp() {

    const [todos,setTodos] = useState([
        { description: 'First thing on the list', isComplete: false },
		{ description: 'Second thing on the list', isComplete: false },
		{ description: 'Last thing todo', isComplete: false },
    ])
  return (
    <div>
      {todos.map((val) => {
        return(
            <div>{val.description}</div>
        )
      })}
    </div>
  )
}
