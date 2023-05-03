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


    const ref = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ref.current.value);
    }
    return(
        <>
            <form>
                <input type='text' ref={ref}/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
        </>
    )
}


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
