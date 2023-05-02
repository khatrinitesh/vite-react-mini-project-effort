import React,{useState} from 'react';
import Select from 'react-select'


export default function CustomSelectExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    
    

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    return(
        <>
            <Select options={options}/>
        </>
    )
}

