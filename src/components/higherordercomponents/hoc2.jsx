import React,{useState} from 'react'

export default function UpdatedHOCExample(ParentComponent) {
  function ChildComponent(){
    const [count,setCount] = useState(0);

    const btnInc = () => {
        setCount(count => count + 1)
    }
    const btnDec = () => {
        setCount(count => count - 1)
    }

    return <ParentComponent count={count} btnInc={btnInc} btnDec={btnDec}/>
  }

  return ChildComponent
}
