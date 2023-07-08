import React,{ useState } from 'react'

export default function CustomApp(props) {
    // const [isGoal,setIsGoal] = useState(true);
    
    // if(isGoal){
    //     return <MadeGoal/>
    // }
    // else{
    //     return <MissedGoal/>
    // }
    return(
        <>
         <Example/>
        </>
    )
}

// function MissedGoal() {
//     return <h1>MISSED!</h1>;
//   }
  
//   function MadeGoal() {
//     return <h1>Goal!</h1>;
//   }


//   function Example(){
//     const cars = ['Ford', 'BMW', 'Audi']
//     return(
//         <>
//         {cars.length > 0 ? (<h2>{cars.length}</h2>) : (<div>No data</div>)}
//         </>
//     )
//   }

//   function Example(){

//     const [isLoggedIn,setIsLoggedIn] = useState(true);
//     return(
//         <>
//          <AuthButton isLoggedIn={isLoggedIn}/>
//         </>
//     )
//   }

//   function AuthButton(props){
//     let {isLoggedIn} = props 

//     if(isLoggedIn){
//         return <button>Logout</button>
//     }
//     else{
//         return <button>Login</button>
//     }
//   }

// class Example extends React.Component{

//     constructor(props){
//         super(props)
//         this.state = {
//             isLoggedIn:true
//         }
//     }

//     render(){
//         let {isLoggedIn} = this.state 
//         return(
//             <>
//             {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
//             </>
//         )
//     }
// }

// function Example(){
//     const isEdit = true
//     return(
//         <>
//          {isEdit ? 'nitesh' : 'sameet'}
//         </>
//     )
// }

function Example(){

    const todo= ['a','b','c']
    return(
        <>
        <Result todoList={todo}/>
        </>
    )
}

function Result({todoList}){
    return(
        <>
         {todoList.length > 0 && <h2>you have {todoList.length} Tasks to do.</h2>}
        </>
    )
}