import React from 'react';
import UpdatedHOCExample from './hoc2';

function ExampleTwo({count,btnInc,btnDec}) {
  return (
    <div>
      <p>Example Two {count}</p>
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
    </div>
  )
}

export default UpdatedHOCExample(ExampleTwo)