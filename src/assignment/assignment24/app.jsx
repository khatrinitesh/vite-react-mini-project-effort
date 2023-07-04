import React from 'react'
import { useRef,useReducer } from 'react';

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}
function Example(){

    const inputRef = useRef();

    const [items,dispatch] = useReducer((state,action) => {
        switch (action.type) {
            case 'add':
              // ... same as before ...
            case 'remove':
              // keep every item except the one we want to remove
              return state.filter((_, index) => index != action.index);
            default:
              return state;
          }
    },[])
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input ref={inputRef}/>
        </form>
         {items.map((val) => {
            return(
                <div key={val.id}>
                    {val.name}
                </div>
            )
         })}
        </>
    )
}
