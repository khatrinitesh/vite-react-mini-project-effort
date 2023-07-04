import React,{useReducer} from 'react'

const initialState = 0;

export default function CustomApp() {
    const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch({type:'add'})}>+</button>
      <button onClick={() => dispatch({type:'subtract'})}>-</button>
      <button onClick={() => dispatch({type:'reset'})}>reset</button>
    </div>
  )
}


const reducer = (state,action) => {
    switch(action.type){
        case  'add' :return state + 1;
        case  'subtract' :return state - 1;
        case  'reset' :return 0;
        default:throw new Error('unexpected action');
    }
}
