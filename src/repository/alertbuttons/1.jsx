import React from 'react';
import { Button } from 'evergreen-ui';

export default function AlertButtonsExample() {
  return (
    <>
      <Example/>
    </>
  )
}


function Example(){
    return(
        <>
            <Button marginRight={16}>Default</Button>
            <Button marginRight={16} appearance="primary">
                Primary
            </Button>
            <Button marginRight={16} appearance="minimal">
                Minimal
            </Button>
        </>
    )
}