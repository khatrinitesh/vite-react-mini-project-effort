import React,{useState, useMemo} from 'react'

export default function UseMemo() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
  const [name,setName] = useState('');
  const [val1,setVal1] = useState(0);
  const [val2,setVal2] = useState(0);

  const add = (num1,num2) => {
    console.log('adding numbers')
    return parseInt(num1) + parseInt(num2)
  }

  const minus = (num1,num2) => {
    console.log('minus numbers');
    return parseInt(num1) - parseInt(num2)
  }

  const multiple = (num1,num2) => {
    console.log('multiply')
    return parseInt(num1) * parseInt(num2)
  }

  const divide = (num1,num2) => {
    console.log('dividend')
    return parseInt(num1) / parseInt(num2)
  }

  const answerdivide = useMemo(() => {
    return divide(val1,val2)
  },[val1,val2]) 

 const answer = useMemo(() => {
   return add(val1,val2)
 },[val1,val2])


 const answerminus = useMemo(() => {
  return minus(val1,val2)
 },[val1,val2])

 const answermultiple = useMemo(() => {
  return multiple(val1,val2)
 },[val1,val2])
 
  return(
    <>
     <input
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <input
            placeholder="Value 1"
            value={val1}
            onChange={(e) => setVal1(e.target.value)}
         />
         <input
            placeholder="Value 2"
            value={val2}
            onChange={(e) => setVal2(e.target.value)}
         />
         <hr/>
         Adding - {answer}
         <br/>
         Minus - {answerminus}
         <br/>
         Multiple - {answermultiple}
         <br/>
         Dividend - {answerdivide}
    </>
  )
}

// function Example() {
//   const [counterone,setCounterone] = useState(0);
//   const [countertwo,setCounterTwo] = useState(0);

//   const incrementOne = () => {
//       setCounterone(counterone + 1)
//   }
//   const incrementTwo = () => {
//       setCounterTwo(countertwo + 1)
//   }

//   const isEven = useMemo(() => {
//       return counterone % 2 === 0;
//   },[counterone])
// return (
//   <div>
//     <button onClick={incrementOne}>Count one - {counterone}</button>
//     <button onClick={incrementTwo}>Count two - {countertwo}</button>
//     <span>{isEven? 'even' : 'odd'}</span>
//   </div>
// )
// }

