import React, { useEffect, useState } from 'react';
import {Posts} from './postdata';

export default function FetchData() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){

    return(
        <>
        <h1>Service result</h1>
        <hr/>
        <Posts/>
        </>
    )
}

