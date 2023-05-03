import React, { useState, useEffect,useCallback } from 'react';

export default function DisableRightClickExample() {
  return (
    <>
       <Example/>
    </>
  )
}

function Example(){

    const handleRightDisable = (e) => {
        console.log('Right Clicked is Disabled')
    }
    
   
    return(
        <>
         <button onContextMenu={handleRightDisable}>Click disabled right click</button>
        </>
    )
}
