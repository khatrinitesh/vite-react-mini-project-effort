import React from 'react';
import './custom.scss';

export default function AnimationExample() {
  return (
    <>
      <Example/>
    </>
  )
}


function Example(){

 

    return(
        <>
        <div style={{ backgroundColor: 'dodgerblue', height: '100vh', width: '100vw', padding: '2em', color: 'whitesmoke' }}>
      <button onClick={() => window.location.reload()}>Trigger animations</button>
      <div className="react-transition swipe-up" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.swipe-up</code></div>
      <div className="react-transition swipe-left" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.swipe-left</code></div>
      <div className="react-transition swipe-right" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.swipe-right</code></div>
      <div className="react-transition swipe-down" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.swipe-down</code></div>
      <div className="react-transition fade-in" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.fade-in</code></div>
      <div className="react-transition scale-in" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.scale-in</code></div>
      <div className="react-transition scale-in-left" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.scale-in-left</code></div>
      <div className="react-transition scale-in-right" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.scale-in-right</code></div>
      <div className="react-transition drop-in" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.drop-in</code></div>
      <div className="react-transition drop-in-right" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.drop-in-right</code></div>
      <div className="react-transition flip-in-x" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.flip-in-x</code></div>
      <div className="react-transition flip-in-x-reverse" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.flip-in-x-reverse</code></div>
      <div className="react-transition flip-in-y" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.flip-in-y</code></div>
      <div className="react-transition flip-in-y-reverse" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.flip-in-y-reverse</code></div>
      <div className="react-transition rotate-in" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.rotate-in</code></div>
      <div className="react-transition rotate-in-reverse" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.rotate-in-reverse</code></div>
      <div className="react-transition woah" style={{ animationDuration: '1s', margin: '2em auto' }}><code>.woah</code></div>
    </div>
        </>
    )
}