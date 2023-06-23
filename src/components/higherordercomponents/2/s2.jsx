import React, { useState } from 'react';
import HOCExample from './hoc';


function S2(props) {
  return (
    <div>
      <h1>S2</h1>
      <h3>{props.num}</h3>
      <button onClick={props.handleEvent}>Count Inc</button>
    </div>
  )
}
export default HOCExample(S2)