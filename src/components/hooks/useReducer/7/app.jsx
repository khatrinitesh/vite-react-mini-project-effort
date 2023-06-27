import { countBy } from 'lodash'
import React,{useReducer} from 'react'

const initialState ={
    count:0
}

export default function CustomApp() {

    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
      {state.count}
      <button onClick={() => dispatch({type:"increment"})}>+</button>
      <button onClick={() => dispatch({type:"decrement"})}>-</button>
      <button onClick={() => dispatch({type:"reset"})}>reset</button>
    </div>
  )
}

function reducer(state,action){
    switch(action.type){
        case 'increment':return {count:state.count + 1};
        case 'decrement':return {count:state.count - 1};
        case 'reset':return {count:0};
        default:throw new Error();
    }
}