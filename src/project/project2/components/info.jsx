import React from 'react'

export default function Info(props) {
    const {name,rollNo} = props;
  return (
    <>
      <div style={{border:'1px solid black',
                 margin:'10px',width:'20%'}}>
        <p> {name} </p>
        <p> {rollNo}</p>
     </div>
 
    </>
  )
}
