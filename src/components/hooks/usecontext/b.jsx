import React from 'react';
import { AppContext } from './myContext';
import { useContext } from 'react';
import C from './c';

export default function B() {

    const {name,setName,count,setCount}  = useContext(AppContext);
  return (
    <div>
    <h1>C Child</h1>
      {name}
      <C/>
    </div>
  )
}
