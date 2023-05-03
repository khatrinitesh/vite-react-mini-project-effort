import React,{useState,useEffect} from 'react'

export default function FragmentExample() {
  return (
    <>
      <Example/>
    </>
  )
}

// EXAMPLE 1
function Example(){
    return(
        <React.Fragment>
            <div>nitesh khatri</div>
        </React.Fragment>
    )
}