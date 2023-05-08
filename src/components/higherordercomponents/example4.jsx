import React from 'react';
import HOCUpdated from './hoc4';

function ExampleFour({name,btnToggle,text}) {
    return(
        <>
        {name}
        <button onClick={btnToggle}>{name}</button>
        <hr/>
        {text && <p>Excepteur esse laboris laborum cupidatat ullamco culpa commodo dolor sunt ut elit amet. Qui exercitation id voluptate sint do irure commodo sint nostrud exercitation cupidatat Lorem amet. Ex non qui non nostrud reprehenderit culpa mollit exercitation officia officia consectetur laboris. Minim aute sint non deserunt do nulla occaecat.

Sunt minim nostrud dolore mollit nulla labore cillum. Consequat est commodo labore et enim. Incididunt do qui magna tempor in culpa reprehenderit do Lorem excepteur aliquip.</p>}
        </>
    )
}

export default HOCUpdated(ExampleFour);