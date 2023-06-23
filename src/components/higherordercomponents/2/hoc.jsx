import React from 'react'
import { useState } from 'react'

const HOCExample = (Student) =>  {
    const HighOrderContainer = () => {
        const [num,setNum] = useState(0)
        const handleEvent =() => {
            setNum(num + 1)
        }

        return(
            <Student num={num} handleEvent={handleEvent}/>
        )
    }
  return HighOrderContainer
}

export default HOCExample;