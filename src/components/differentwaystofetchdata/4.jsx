import React from 'react';
import UseFetch from './usefetch';
import axios from 'axios';

export default function CustomApp() {

    const {isLoading,serverError,apiData} = UseFetch('https://jsonplaceholder.typicode.com/posts')

  if(isLoading){
    return(
      <div>Loadng...</div>
    )
  }
  if(serverError){
    return(
      <div>Error</div>
    )
  }
  return(
    <div>
      {apiData.map((val) => {
        return(
          <div>{val.title}</div>
        )
      })}
    </div>
  )
}
