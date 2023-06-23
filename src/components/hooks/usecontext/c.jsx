import React from 'react';
import { useContext } from 'react';
import { AppContext } from './myContext';

export default function C() {
    const {name,setName,count,setCount}  = useContext(AppContext);
  return (
    <div>
    <h2>C Child</h2>
    {name} <br/> {count}
    <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  )
}
