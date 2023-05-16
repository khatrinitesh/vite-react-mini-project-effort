import React from 'react';
import HOCUpdated from './hoc5';

function ExampleFive({btnInc,btnDec,btnRes,count}) {
  return (
    <div>
        {count}
      <button onClick={btnDec}>-</button>
      <button onClick={btnInc}>+</button>
      <button onClick={btnRes}>Reset</button>
    </div>
  )
}
export default HOCUpdated(ExampleFive);
