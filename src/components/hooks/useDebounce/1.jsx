import React,{useState,useEffect} from 'react';
import { UseDebounce } from './usedebounce';

export default function UseDebounceExample() {
  return (
    <>
      <Example/>
    </>
  )
}


function Example(){
    const [value,setValue] = useState('')
    const debouncedValue = UseDebounce(value)


    const handleChange = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        console.log(debouncedValue)
    },[debouncedValue])
    return(
        <>
            <input type="text" value={value} onChange={handleChange}/>
        </>
    )
}



