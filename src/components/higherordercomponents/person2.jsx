import React from 'react';
import UpdatedComponent from './hoc';

function PersonTwo({money,handleIncrment}) {
  return (
    <div>
      <h2>Person Two ${money}</h2>
      <button onClick={handleIncrment}>Increase Money</button>
    </div>
  )
}

export default UpdatedComponent(PersonTwo)