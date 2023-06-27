
import React, { useReducer } from 'react';

const initialState  ={width:15}

export default function CustomApp() {

    const [user,dispatch] = useReducer(reducer,initialState)
  return (
    <>
        <div style={{background:'teal',height:'30px',width:user.width}}> </div>
        <div style={{marginTop: '3rem'}}>
            <button onClick={() => dispatch({type:'plus'})}>Increase bar size</button>
            <button onClick={() => dispatch({type:'minus'})}>Decrease bar size</button>
        </div>
    </>
  )
}

const reducer = (state,action) => {
    switch(action.type){
        case 'plus':return {width:state.width + 15}
        case 'minus':return {width:Math.max(state.width - 15)}
        default:throw new Error("what is going on?")
    }
}