import React from 'react';
import HigherOrderComp from './hoc7';

function Example(props) {
  return (
    <div>
        <h1>{props.name}</h1>
    </div>
  )
}

export default HigherOrderComp(Example);