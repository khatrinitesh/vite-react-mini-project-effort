import React,{useEffect} from 'react';
import {name,sum} from './example1';

export default function CustomApp() {

    const add = sum(10,20)
  return (
    <>
      {name}
      <br/>
      {add}
    </>
  )
}
