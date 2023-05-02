import React, { useState, useEffect, useRef } from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function CustomCheckboxExample() {
  return (
    <>
       <Example/>
    </>
  )
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Example(){
   
    return(
        <>
            <Checkbox {...label} defaultChecked />
            <Checkbox {...label} />
            <Checkbox {...label} disabled />
            <Checkbox {...label} disabled checked /> 
        </>
    )
}

