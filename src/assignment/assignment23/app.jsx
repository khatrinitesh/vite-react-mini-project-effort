import React from 'react'
import { useReducer } from 'react'

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

function Example(){
    const [sum,dispatch] = useReducer((state,action) => {
        return state + action 
    },0)
    return(
        <>
         {sum}
         <button onClick={() => dispatch(1)}>Add 1</button>
        </>
    )
}