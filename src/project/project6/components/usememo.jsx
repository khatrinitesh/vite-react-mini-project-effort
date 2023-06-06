import React,{useState, useMemo} from 'react'

export default function UseMemoExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){

  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);

  const add = (a,b) => {
    return parseInt(a) + parseInt(b)
  }
  const minus = (a,b) => {
    return parseInt(a) - parseInt(b)
  }
  const mult = (a,b) => {
    return parseInt(a) * parseInt(b)
  }
  const div = (a,b) => {
    return parseInt(a) / parseInt(b)
  }
  const calculator1 = useMemo(() => {
    return add(num1,num2)
  },[num1,num2])
  const calculator2 = useMemo(() => {
    return minus(num1,num2)
  },[num1,num2])
  const calculator3 = useMemo(() => {
    return mult(num1,num2)
  },[num1,num2])
  const calculator4 = useMemo(() => {
    return div(num1,num2)
  },[num1,num2])

  const handleNum1 = () => {
    setNum1(num1 => num1 + 1)
  }
  const handleNum2 = () => {
    setNum2(num2 => num2 + 1)
  }

  const handleChangeOne=(e) => {
    e.preventDefault();
    setNum1(e.target.value)
  }
  const handleChangeTwo=(e) => {
    e.preventDefault();
    setNum2(e.target.value)
  }
  
    return(
      <>
       <input type="text" value={num1} onChange={handleChangeOne}/>
       <input type="text" value={num2} onChange={handleChangeTwo}/>
       <button onClick={handleNum1}>Click 1</button>
       <button onClick={handleNum2}>Click 2</button>
       <hr/>
       {calculator1}
       <br/>
       {calculator2}
       <br/>
       {calculator3}
       <br/>
       {calculator4}
      </>
    )
}

// function Example(){
//   const [name,setName] = useState('');
//   const [val1,setVal1] = useState(0);
//   const [val2,setVal2] = useState(0);

//   const add = (num1,num2) => {
//     console.log('adding numbers')
//     return parseInt(num1) + parseInt(num2)
//   }

//   const minus = (num1,num2) => {
//     console.log('minus numbers');
//     return parseInt(num1) - parseInt(num2)
//   }

//   const multiple = (num1,num2) => {
//     console.log('multiply')
//     return parseInt(num1) * parseInt(num2)
//   }

//   const divide = (num1,num2) => {
//     console.log('dividend')
//     return parseInt(num1) / parseInt(num2)
//   }

//   const answerdivide = useMemo(() => {
//     return divide(val1,val2)
//   },[val1,val2]) 

//  const answer = useMemo(() => {
//    return add(val1,val2)
//  },[val1,val2])


//  const answerminus = useMemo(() => {
//   return minus(val1,val2)
//  },[val1,val2])

//  const answermultiple = useMemo(() => {
//   return multiple(val1,val2)
//  },[val1,val2])
 
//   return(
//     <>
//      <input
//             placeholder="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//          />
//          <input
//             placeholder="Value 1"
//             value={val1}
//             onChange={(e) => setVal1(e.target.value)}
//          />
//          <input
//             placeholder="Value 2"
//             value={val2}
//             onChange={(e) => setVal2(e.target.value)}
//          />
//          <hr/>
//          Adding - {answer}
//          <br/>
//          Minus - {answerminus}
//          <br/>
//          Multiple - {answermultiple}
//          <br/>
//          Dividend - {answerdivide}
//     </>
//   )
// }

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

