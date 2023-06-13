import React from 'react';
import Container from './hoc6';

function ExampleSix({name,btnChange}) {
  return (
    <div>
      {name}
      <button onClick={btnChange}>Change</button>
    </div>
  )
}
export default Container(ExampleSix);
