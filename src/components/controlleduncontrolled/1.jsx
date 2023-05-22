import React,{createContext,useContext, useEffect, useState,useRef} from 'react';


export default function ConrolledUnControlledExample() {
  return (
    <>
      <Example/>
    </>
  )
}

// uncontrolled
function Example(){
  const inputRef = useRef();

  function handleSubmit(e){
    e.preventDefault();
    console.log('submitted value',inputRef.current.value);
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
          <input type='text' ref={inputRef}/>
          <button type="submit">Submit</button>
      </form>
    </>
  )
}

// controlled
// function Example(){

//   const [inputVal,setInputVal] = useState('');

//   const handleChange= (e) => {
//     setInputVal(e.target.value)
//   }

//   function handleSubmit(e){
//     e.preventDefault();
//     console.log('submitted',inputVal)
//   }

//   return(
//     <>
//      <form onSubmit={handleSubmit}>
//         <input type='text' value={inputVal} onChange={handleChange}/>
//         <button type="submit">Submit</button>
//      </form>
//     </>
//   )
// }


// // uncontrolled
// function Example(){


//     const ref = useRef();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(ref.current.value);
//     }
//     return(
//         <>
//             <form>
            //  <input type='text' ref={ref}/>
//                 <button type="submit" onClick={handleSubmit}>Submit</button>
//             </form>
//         </>
//     )
// }


// controlled 
// function Example(){

//     const [name,setName] = useState('');   
//     console.log(name);
//     return(
//         <>
//             <form>
//                 <input type='text' value={name} onChange={(e) => setName(e.target.value)}/>
//                 <button type="submit">Submit</button>
//             </form>
//         </>
//     )
// }
