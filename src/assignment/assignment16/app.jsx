import React from 'react'

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

function Example(){
    const greeting = {
        title: 'React',
        description: 'Your component library for ...',
    }
    return(
        <>
         <Welcome {...greeting}/>
        </>
    )
}
const Welcome = ({title,description}) => {
    return(
        <>
         <Headline title={`Welcome ${title}`}/>
         <Description paragraph={description}/>
        </>
    )
}

const Headline = ({ title }) => <h1>{title}</h1>;
const Description = ({ paragraph }) => <p>{paragraph}</p>;