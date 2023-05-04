import React,{useState} from 'react'

export default function UpdatedComponent(OriginalComponent) {
  function NewComponent(){
    const [money,setMoney] = useState(0)

    const handleIncrment = () => {
        setMoney(money => money + 10)
    }

    return <OriginalComponent handleIncrment={handleIncrment} money={money}/>
  }
  return NewComponent
}
