import React,{useState,useEffect} from 'react'
import './style.scss';
import Draggable from 'react-draggable';

export default function DraggableExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    return(
        <>
         <Draggable>
            <div className="box">
                <div>Move me around!</div>
            </div>
        </Draggable>
        </>
    )
}