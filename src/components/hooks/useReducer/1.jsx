import React,{useReducer} from 'react'

export default function UseReducrExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
  const [state,dispatch] = useReducer(reducer,{numGenerator:1,showEmoji:false})
  return(
    <>
    <h1>{'🎸'.repeat(state.numGenerator)}</h1>
     <button onClick={() => dispatch({type:'ADD_GUITAR'})}>Add guitar</button>
     <button onClick={() => dispatch({type:'LESS_GUITAR'})}>Less guitar</button>
     <button onClick={() => dispatch({type:'RESET'})}>RESET</button>
     {state.showEmoji && <h1>Smile</h1>}
    </>
  )
}

export const reducer = (state,action) => {
  switch(action.type){
    case "ADD_GUITAR":return {numGenerator:state.numGenerator+1,showEmoji:true}
    case "LESS_GUITAR":return {numGenerator:state.numGenerator-1,showEmoji:false}
    case "RESET":return {numGenerator:0,showEmoji:false}
    default:return state
  }
}


// function Example(){
//     const [state,dispatch] = useReducer(reducer,{numGuitars:1,showEmoji:false})
//     return(
//         <>
//          <h1>{'🎸'.repeat(state.numGuitars)}</h1>
//          <button onClick={() => dispatch({type:'ADD_GUITAR'})}>Add guitar</button>
//          <button onClick={() => dispatch({type:'REMOVE_GUITAR'})}>Remove guitar</button>
//          <button onClick={() => dispatch({type:'RESET'})}>Reset</button>
//          {state.showEmoji && <h1>Smile</h1>}
//         </>
//     )
// }

// export const reducer = (state,action) => {
//     switch(action.type){
//         case 'ADD_GUITAR' : return {numGuitars:state.numGuitars+1,showEmoji:true}
//         case 'REMOVE_GUITAR' : return {numGuitars:state.numGuitars-1,showEmoji:false}
//         case 'RESET' : return {numGuitars:0,showEmoji:false}
//         default:return state
//     }
// }
