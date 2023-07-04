import React from 'react';
import styled from 'styled-components';

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: ${props => props.hasRadius ? '3px' : '0px'};
`;


function Example(){
    const [value, setValue] = React.useState('');

    const onChange = (e) => {
        setValue(e.target.value)
    }
    return(
        <>
         <Input value={value} onChange={onChange} hasRadius={true}/>
         {value}
        </>
    )
}

