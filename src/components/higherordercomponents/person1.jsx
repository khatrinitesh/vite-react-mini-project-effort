import React from 'react';
import UpdatedComponent from './hoc';

function PersonOne({money,handleIncrment}) {
  return (
    <div>
      <h2>Person One ${money}</h2>
      <button onClick={handleIncrment}>Increase Money</button>
    </div>
  )
}
export default UpdatedComponent(PersonOne)
