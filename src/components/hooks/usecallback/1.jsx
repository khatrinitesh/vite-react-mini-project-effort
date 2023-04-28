import { useState } from 'react';
import { useMemo, useCallback } from 'react';

export default function UseCallBackExample() {
  return (
    <div>
      <Counter/>
    </div>
  )
}

const Counter = () => {
    const Button = ({handleClick,name}) => {
        console.log(`${name} rendered`)
        return <button onClick={handleClick}>{name}</button>
    }

    console.log('counter rendered')
    const [countOne,setCountOne] = useState(0)
    const [countTwo,setCountTwo] = useState(0)

    const memoizedSetCountOne = useCallback(() => setCountOne(countOne + 1),countOne)
    const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo + 1),countTwo)
    return(
        <>
            {countOne} - {countTwo}
            <Button handleClick={memoizedSetCountOne} name="button1">1</Button>
            <Button handleClick={memoizedSetCountTwo} name="button2">2</Button>
        </>
    )
}
