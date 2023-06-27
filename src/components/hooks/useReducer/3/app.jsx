import React,{useReducer,useEffect,useRef, useState} from 'react'


const initialState = {
    isRunning:true,
    time:0
}

export default function CustomApp() {

    const [state,dispatch] = useReducer(reducer,initialState);
    const idRef = useRef();

    useEffect(() => {
        if(!state.isRunning){
            return;
        }
        idRef.current = setInterval(() => dispatch({type:'tick'}),1000)
        return () => {
            clearInterval(idRef.current)
            idRef.current = 0
        }
    },[state.isRunning])
  return (
    <div>
      {state.time}
      <button onClick={() => dispatch({type:'start'})}>start</button>
      <button onClick={() =>dispatch({type:'stop'})}>stop</button>
      <button onClick={() => dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

function reducer(state,action){
    switch(action.type){
        case 'start':return {...state,isRunning:true};
        case 'stop':return {...state,isRunning:false};
        case 'reset':return {isRunning:false,time:0};
        case 'tick':return {...state,time:state.time+1};
        default:throw new Error();
    }
}