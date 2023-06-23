import React from 'react'

export default function CustomApp() {
  return (
    <div>
      <ChildOne>
        <ChildTwo>
            <ChildThree></ChildThree>
        </ChildTwo>
      </ChildOne>
    </div>
  )
}


function ChildOne({children}){
    return(
        <>
         <h1>Child one</h1>
         {children}
        </>
    )
}
function ChildTwo({children}){
    return(
        <>
         <h1>Child two</h1>
         {children}
        </>
    )
}
function ChildThree({children}){
    return(
        <>
         <h1>Child three</h1>
         {children}
        </>
    )
}