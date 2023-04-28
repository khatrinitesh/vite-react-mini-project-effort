import React,{useState} from 'react';

export default function ArrowsExample() {
  return (
    <>
      <Example user="nitesh"/>
    </>
  )
}

const Example = ({user}) => {
    const [display,setDisplay]  = useState(false);

    const handleToggle = () => {
        setDisplay(!display)
    }
    return(
        <>
         <button onClick={handleToggle}>Click me</button>
         {display && <h1>Welcome {user}</h1>}
        </>
    )
}