import React from 'react';
import HOCUpdated from './hoc3';

function ExampleThree({name,btnChange}) {
    return(
        <>
        {name}
        <button onClick={btnChange}>Click</button>
        </>
    )
}

export default HOCUpdated(ExampleThree);
