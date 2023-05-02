import React from 'react'

export default function BigHeaderExample() {
  return (
    <>
      <Parent/>
    </>
  )
}


function Parent(){

    const object = {
        title:"Article 1",
        desc:"Lorem Ipsum"
    }
    return(
        <>
            <Example {...object}/>
        </>
    )
}

function Example({title,desc}){
    return(
        <>
         <div className='section_title'>
            <h3>{title}</h3>
            <p>{desc}</p>
         </div>
        </>
    )
}