import { useState } from 'react';
import { useMemo, useCallback } from 'react';

export default function UseCallBackExample() {
  return (
    <div>
      <ParentComponent/>
    </div>
  )
}

function ParentComponent(){
  const [age,setAge] = useState(34);
  const [salary,setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1)
  },[age])

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000)
  },[salary])

  const isEVen = useMemo(() => {
    return age % 2 === 0
  },[age])

  const isOdd = useMemo(() => {
    return age % 2 !== 0
  },[age])
  return(
    <>
     <Count text="age" count={age}/>
      <Button handleClick={incrementAge}>Increment my age</Button>
      <Count text="salary" count={salary}/>
      <Button handleClick={incrementSalary}>Increment my salary</Button>
      <br/>
      <span>Even: {isEVen ? "even" : "odd"}</span>
      <br/>
      <span>Odd: {isOdd ? "even" : "odd"}</span>
    </>
  )
}

function Count(props){
  return(
    <>
     {props.text} = {props.count}
    </>
  )
}

function Button({handleClick,children}){
  return(
    <>
      <button onClick={handleClick}>{children}</button>
    </>
  )
}



// const Counter = () => {
//     const Button = ({handleClick,name}) => {
//         console.log(`${name} rendered`)
//         return <button onClick={handleClick}>{name}</button>
//     }

//     console.log('counter rendered')
//     const [countOne,setCountOne] = useState(0)
//     const [countTwo,setCountTwo] = useState(0)

//     const memoizedSetCountOne = useCallback(() => setCountOne(countOne + 1),countOne)
//     const memoizedSetCountTwo = useCallback(() => setCountTwo(countTwo + 1),countTwo)
//     return(
//         <>
//             {countOne} - {countTwo}
//             <Button handleClick={memoizedSetCountOne} name="button1">1</Button>
//             <Button handleClick={memoizedSetCountTwo} name="button2">2</Button>
//         </>
//     )
// }
