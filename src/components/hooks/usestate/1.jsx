import React,{useState} from 'react'

export default function UseStateExample() {
  return (
    <>
      <Example/>
    </>
  )
}

// conditional rendering
function Example(){

    const isLoggedIn = false;
    if(isLoggedIn){
        return(
            <div>nitesh khatri</div>
        )
    }
    else{
        return(
            <div>sameet khatri</div>
        )
    }
}

// LOGICAL && OPEARTOR

// function Example(){

//     const isLogged = false;
//     return(
//         <>
//          {isLogged ? 'true' : 'false'}
//         </>
//     )
// }


// logical AND (&&) 
// function Example(){

// //     const [show,setShow] = useState(true);
// //     const [isShow,setIsShow] = useState(false);


// //     return(
// //         <>
// //          {(show && <>nitesh khatri</>)}
// //         </>
// //     )
// // }


// logical OR (||)
// function Example(){

//     const [example,setExample] = useState(true);
//     const [isShow,setIsShow] = useState(false);


//     return(
//         <>
//          {(example || isShow) ? <p>this is test</p> : ""}
//         </>
//     )
// }

// function Example(){

//     const [show,setShow] = useState(false);

//     const handleToggle=() => {
//         setShow(!show)
//     }

//     return(
//         <>
//         {show ? 'nitesh' : 'sameet'}
//         <button onClick={handleToggle}>{show ? 'true' : 'false'}</button>
//         </>
//     )
// }

// useState Hook Update State Hook
// function Example(){

//     const [computer,setComputer] = useState({
//         keyboard:'lenovo',
//         mouse:'hp'
//     });

//     const update  =() => {
//         setComputer({
//             return {...previousState,mouse:'Dell'}
//         })
//     }

//     return(
//         <>
//             <h1>my favorite keyboard is <i>{computer.keyboard}</i></h1>
//             <h1>my favorite mouse is <i>{computer.mouse}</i></h1>
//             <button onClick={update}>Update</button>
//         </>
//     )
// }
// function Example(){
//     const [computer,setComputer] = useState('Dell');

//     const handleComputer = () => {
//         setComputer('Lenovo')
//     }

//     return(
//         <>
//          {computer}
//          <button onClick={handleComputer}>Click me</button>
//         </>
//     )
// }