import React from 'react'

export default function CustomApp() {

    const greeting= {
        title:"react",
        description:"your component library for ...."
    }
  return (
    <div>
      <Welcome text={greeting}/>
    </div>
  )
}


const Welcome = ({text}) => {
    return(
        <>
         <Headline title={`Welcome ${text.title}`}/>
         <Paragraph paragraph={text.description}/>
        </>
    )
}

const Headline = ({title}) => {
    return(
        <>
         <h1>{title}</h1>
        </>
    )
}
const Paragraph = ({paragraph}) => {
    return(
        <>
         {paragraph}
        </>
    )
}