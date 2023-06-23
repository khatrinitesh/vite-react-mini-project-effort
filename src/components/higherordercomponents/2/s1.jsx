import React, { useState } from 'react';
import HOCExample from './hoc';

const S1 = (props) =>  {
  return (
    <div>
      <h1>S1</h1>
      <h3>{props.num}</h3>
      <button onClick={props.handleEvent}>Count Inc</button>
      <hr/>
    </div>
  )
}

export default HOCExample(S1);