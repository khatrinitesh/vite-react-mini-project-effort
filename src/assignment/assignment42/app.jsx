import React from 'react';
import Hero from './hero';
import ErrorBoundary from './error';

const user = {
    name:'nitesh'
}

export default function CustomApp(){

    const user = {name:"nitesh"}

    return (
        <>
            <ErrorBoundary>
                <Hero user={user}/>
            </ErrorBoundary>
        </>
        )
}     
    