import React from 'react';
import Banner from '../components/banner';
import { useState } from 'react';
import ChildOne from '../components/child/child1';
import ErrorBoundary from '../components/errorboundaries/1/app';
// import SlideShow from '../components/slideshow/1/app';
import UseReducer from '../components/usereducer/1/app';
import FetchApi from '../components/fetchapi/1/app';

export default function About() {

  const [activeToggle,setActiveToggle] = useState(false);

  const btnToggle = e => {
    e.preventDefault();
    setActiveToggle(!activeToggle)
  }
  return (
    <div className='content'>
      <ErrorBoundary>
          <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
          <FetchApi/>
          <hr/>
          <UseReducer/>
          <hr/>
          <button onClick={btnToggle} className={activeToggle ? 'btn btn-primary' : 'btn btn-success'}>
          {activeToggle ? 'close' : 'open'}
          </button>
          {activeToggle && <ChildOne/>}
        </ErrorBoundary>
    </div>
  )
}

