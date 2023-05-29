import React,{useReducer} from 'react'

export default function UseReducrExample() {
  return (
    <>
      <Example/>
    </>
  )
}


const initialState = {name:'nitesh',age:34}

function Example(){

  const [state,dispatch] = useReducer(reducer,initialState)

  const handleInputChange  = (e) => {
    e.preventDefault();
    dispatch({
      type:'changed_name',
      nextName:e.target.value
    })

  }
  return(
    <>
     <input type="text" value={state.name} onChange={handleInputChange}/>
     <button onClick={() => dispatch({type:'increment_age'})}>Increment age</button>
     {state.name} {state.age}
    </>
  )
}

function reducer(state,action){
  switch(action.type){
    case 'increment_age' : {
      return {
        name:state.name,
        age:state.age + 1 
      };
    }
    case "changed_name":{
      return{
        name:action.nextName,
        age:state.age 
      };
    }
  }
  throw Error('unknown action:' + action.type)
}


// function Example(){

//   const [state,dispatch] = useReducer(reducer,{age:34})
//   return(
//     <>
//     <button onClick={() => dispatch({type:'increment_age'})}>Increment age</button>
//       {state.age}
//     </>
//   )
// }

// function reducer(state,action){
//   if(action.type === 'increment_age'){
//     return{
//       age:state.age+1
//     }
//   }
//   throw Error('Unknown action.')
// }

// function Example(){

//   const [state,dispatch] = useReducer(reducer,{age:34})
//   return(
//     <>
//     <button onClick={() => dispatch({type:'incremented_age'})}> Increment age</button>
//     <p>you are {state.age}</p>
//     </>
//   )
// }

// function reducer(state,action){
//   if(action.type === 'incremented_age'){
//     return{
//       age:state.age+1
//     }
//   }
//   throw  Error('unknown action.')
// }

// function Example(){
//   const [state,dispatch] = useReducer(reducer,{numGenerator:1,showEmoji:false})
//   return(
//     <>
//     <h1>{'🎸'.repeat(state.numGenerator)}</h1>
//      <button onClick={() => dispatch({type:'ADD_GUITAR'})}>Add guitar</button>
//      <button onClick={() => dispatch({type:'LESS_GUITAR'})}>Less guitar</button>
//      <button onClick={() => dispatch({type:'RESET'})}>RESET</button>
//      {state.showEmoji && <h1>Smile</h1>}
//     </>
//   )
// }

// export const reducer = (state,action) => {
//   switch(action.type){
//     case "ADD_GUITAR":return {numGenerator:state.numGenerator+1,showEmoji:true}
//     case "LESS_GUITAR":return {numGenerator:state.numGenerator-1,showEmoji:false}
//     case "RESET":return {numGenerator:0,showEmoji:false}
//     default:return state
//   }
// }


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
