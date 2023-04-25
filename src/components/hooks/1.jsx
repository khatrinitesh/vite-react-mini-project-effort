import { Fab } from '@mui/material'
import React,{useState,forwardRef,useRef} from 'react'
import { useReducer } from 'react'


export default function HooksExample() {
  return (
    <div>
      <Example/>
    </div>
  )
}


// function Example(){

//     const inpuRef = useRef(null)
//     const [value,setValue] = useState('')

//     const onInputChange = (e) => {
//         setValue(e.target.value)
//     }

//     const focus = () => {
//         inpuRef.current?.focus();
//     }

//     return(
//         <>
//             <Input value={value} onChange={onInputChange} ref={inpuRef}/>
//             <button onClick={focus}>Focus</button>
//         </>
//     )
// }

// const Input = forwardRef((props,ref) => {
//     return <input ref={ref} {...props}/>
// }) 


// initial state of the database
const initialState = { count: 0 };

// API logic: how to update the database when the
// 'increment' API endpoint is called
const reducer = (state, action) => {
    if (action.type === 'increment') {
      return { count: state.count + action.payload };
    }
  };

function Example(){
     // you can think of this as initializing and setting
    // up a connection to the backend
    const [state,dispatch] = useReducer(reducer,initialState)
    return(
        <>
         {/* Reading from the database */}
         count: {state.count}
         {/* calling the API endpoint when the button is clicked */}
         <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>
        +
      </button>
        </>
    )
}