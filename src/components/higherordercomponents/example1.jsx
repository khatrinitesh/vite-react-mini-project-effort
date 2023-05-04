import React from 'react';
import UpdatedHOCExample from './2';

 function ExampleOne({count,btnInc,btnDec}) {
  return (
    <div>
      <p>Example Two {count}</p>
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
    </div>
  )
}
export default UpdatedHOCExample(ExampleOne)