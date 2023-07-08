import React from 'react'

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}


function Example(){
    return(
        <>
        <First fname='nitesh' lname='khatri'/>
        </>
    )
}

function First(props){

    function isAction(e){
        console.log(e.target)
        console.log('clicked',e.target.id)
    }
    return(
        <>
        {props.fname} - {props.lname}   
        <button id="emp_10" onClick={(e) => isAction(e)}>Click</button>
        </>
    )
}