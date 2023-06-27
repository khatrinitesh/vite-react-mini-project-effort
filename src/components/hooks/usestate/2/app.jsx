import React, { useState } from 'react'

export default function CustomApp() {

    const [count,setCount] = useState(0);
    const [intValue, setintValue] = useState(20); // Number
    const [stringValue, setStringValue] = useState('Mike'); // String
    const [booleanValue, setBooleanValue] = useState(true); // Boolean

    const btnInc =() => {
        setCount(c => c  + 1)
    }
    const btnDec =() => {
        setCount(c => c  - 1)
    }
    const btnRes =() => {
        setCount(0)
    }
  return (
    <div>
      {count}
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
      <button onClick={btnRes}>Reset</button>
      {intValue}
      {stringValue}
      <br/>
      <p>Boolean value: {booleanValue ? 'yes' : ' no'}</p>
    </div>
  )
}
