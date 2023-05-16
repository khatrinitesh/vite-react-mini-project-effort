import React,{useState,useEffect, useRef} from 'react';
import Audio from './audio';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default function ForwardRefExample() {
  return (
    <>
      <Example/>
    </>
  )
}
function Example(){

    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play();
    },[]);

    const handleClick = () => {
        audioRef.current.pause();
    };
    return(
        <>
         <Audio ref={audioRef} />
        </>
    )
}

