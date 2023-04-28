import React from 'react';
import { Alert } from 'evergreen-ui'

export default function AlertsExample() {
  return (
    <>
      <Example/>
    </>
  )
}


function Example(){

    return(
        <>
        <div style={{
            display: 'block', width: 700, paddingLeft: 30
            }}>
            <h4>ReactJS Evergreen Alert Component</h4>
            <Alert
                intent="warning"
                title="Sample Warning Alert"
                marginBottom={32}
            />
            <Alert
                intent="success"
                title="Sample Success Alert"
                marginBottom={32}
            />
            </div>
        </>
    )
}