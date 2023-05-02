import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BlockButtonsExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    return(
        <>
         <div className='content'>
         <Stack spacing={2} direction="row">
            <Button onClick={() => {
    console.warn('clicked');
  }} variant="text">Text</Button>
            <Button variant="contained" disabled>Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
         </div>
        </>
    )
}