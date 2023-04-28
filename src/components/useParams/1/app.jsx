import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route
   } from "react-router-dom";
   import ExploreContainer from './explorecard';
import ExploreDetail from './exploredetail';

export default function CustomApp() {

    const data = [
        {
          id: 1,	
          name: 'Hong Kong Disneyland',
          category: 'Entertainment'
      }, 
      {
          id: 2,		
          name: 'Repulse Bay and the Beaches',
          category: 'Outdoor'
      }, 
      {
          id: 3,
          name: 'Star Ferry Pier/Victoria Harbour',
          category: 'Attraction'
      }
  ]
  return (
    <>
      <Router>
      <Routes>
    	<Route exact path='/explore'>
    		<Container data={ data } />
    	</Route>
    	<Route path='/explore/:name'>
    		<ExploreDetail data={ data } />
    	</Route>
      </Routes>
    </Router>
    </>
  )
}


