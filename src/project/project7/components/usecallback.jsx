import React,{useState,useMemo, useCallback} from 'react';

export default function UseCallbackExample() {
  return (
    <div>
    <Example/>    
    </div>
  )
}

// >>>>>>>>>>>>>>>>> EXAMPLE 2
// function Example(){
//     const [name, setName] = useState('');
//     const [val1, setVal1] = useState(0);
//     const [val2, setVal2] = useState(0);

//     const add = (num1,num2) => {
//         console.log('Adding numbers');
//         return parseInt(num1) + parseInt(num2)
//     }

//     const answer = useMemo(() => {
//         return add(val1, val2);
//      }, [val1, val2]);
//     return(
//         <>
//          <input
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
//          {answer}
//         </>
//     )
// }

// >>>>>>>>>>>>>>>>> EXAMPLE 1 
// const Button =({handleClick,name}) => {
//     console.log(`${name} rendered`);
//     return <button onClick={handleClick}>{name}</button>
// }
// function Example(){
//     const [countOne, setCountOne] = useState(0)
//     const [countTwo, setCountTwo] = useState(0)

//     const memoizedSetCountOne  = useCallback(() => {
//         setCountOne(countOne => countOne + 1)
//     },[countOne])

//     const memoizedSetCountTwo  = useCallback(() => {
//         setCountTwo(countTwo => countTwo + 1)
//     },[countOne])
//     return(
//         <>
//         {countOne}
//         <Button handleClick={memoizedSetCountOne} name="button1"/>
//         {countTwo}
//         <Button handleClick={memoizedSetCountTwo} name="button2"/>
//         </>
//     )
// }
