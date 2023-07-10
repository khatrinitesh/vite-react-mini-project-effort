import React,{useReducer } from 'react';

const initialState = 0;

export default function UseReducer() {
  return (
    <div>
      <MathComponent/>
    </div>
  )
}

const reducer = (state,action) => {
    switch(action.type){
        case 'add':return state + 1;
        case 'minus':return state - 1;
        case 'multiply':return state * 2;
        case 'divide':return state / 2;
        case 'reset':return initialState;
        default:return state;
    }
}

function MathComponent(){

    const [count,dispatch] = useReducer(reducer,initialState)
    return(
        <>
        <div>Output is {count}</div>
        <button onClick={() => dispatch({type:'add'})}>+</button>
        <button onClick={() => dispatch({type:'minus'})}>-</button>
        <button onClick={() => dispatch({type:'multiply'})}>*</button>
        <button onClick={() => dispatch({type:'divide'})}>/</button>
        <button onClick={() => dispatch({type:'reset'})}>reset</button>
        </>
    )
}