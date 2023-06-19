import React from 'react'

const HigherOrderComp = (OriginalComponent) =>{
  function Example(){
    return(
        <OriginalComponent name="sameet"></OriginalComponent>
    )
  }
  return Example
}
export default HigherOrderComp;
