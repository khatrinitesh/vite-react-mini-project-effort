import React, { useEffect, useReducer ,useRef} from 'react';

const initialState = {
    isRunning:true,
    time:0
}

export default function CustomApp() {

    const [user,dispatch] = useReducer(reducer,initialState)
    const idRef = useRef();

    useEffect(() => {
        if(!user.isRunning){
            return;
        }
        idRef.current = setInterval(() => dispatch({type:'tick'}),1000)
        return () => {
            clearInterval(idRef.current)
            idRef.current = 0;
        }
    },[user.isRunning])
  return (
    <div>
        {user.time}
      <button onClick={() => dispatch({type:'start'})}>start</button>
      <button onClick={() => dispatch({type:'stop'})}>stop</button>
      <button onClick={() => dispatch({type:'reset'})}>reset</button>
    </div>
  )
}
function reducer(state,action){
    switch(action.type){
        case "start":return {...state,isRunning:true};
        case "stop":return {...state,isRunning:false};
        case "reset":return {isRunning:false,time:0}
        case "tick":return {...state,time:state.time+1}
        default:throw new Error();
    }
}