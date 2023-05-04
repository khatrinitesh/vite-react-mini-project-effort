import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom'

export default function Portalsxample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    return(
        <>
            <MyModal/>
        </>
    )
}

function MyModal(){

    const handleClick= () => {
        console.log('hi welcome')
    }
    return ReactDOM.createPortal(
        <div className='modal'>
            <h2>nitesh khatri</h2>
            <p>This is part of the modal</p>
            <button onClick={handleClick}>Click</button>
        </div>,
        document.body
    )
}