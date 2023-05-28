import React,{useState} from 'react'

export default function Conditional() {
  return (
    <div>
      {/* <LoggedStatus isLoggedIn={true}/> */}
      <Example/>
    </div>
  )
}

function Example(){
   const [textSwitch, setTextSwitch] = useState(true);

   const handleToggle=() => {
    setTextSwitch(!textSwitch)
   }
  return(
    <>
    <button onClick={handleToggle} type="button">
        Toggle Name
      </button>
      <Greeting text={textSwitch}/>
    </>
  )
}
function Greeting(props){
  console.log(props.text);
  if(props.text){
    return(
      <p>Hello! I'm Nathan and I'm a Software Developer. Pleased to meet you!</p>
    )
  }
  return(
    <p>Hello! I'm Jane and I'm a Frontend Developer. Pleased to meet you!</p>
  )
}

// class Example extends React.Component{
//     render(){
//         const edited = true 
//         return(
//             <>
//              {edited ? (
//         <UpdateButton onClick={this.handleUpdateClick} />
//       ) : (
//         <EditButton onClick={this.handleEditClick} />
//       )}
//             </>
//         )
//     }
// }

// function UpdateButton(props){
//     return(
//         <>

//         </>
//     )
// }


// function EditButton(props){
//     return(
//         <>

//         </>
//     )
// }


// // LoggedInUser Component:
// function LoggedInUser(props) {
//     return <div>
//        <h1>Welcome back! </h1>
//        <span>Log out </span>
//      </div>;
// }

// // LoggedOutUser Component:
// function LoggedOutUser(props) {
//     return <div>
//        <h1>Sign in, please! </h1>
//        <span onClick={onClick}>Log out </span>
//      </div>;
//   }

//   // LoggedStatus 
//   function LoggedStatus(props) {
//     const isLoggedIn = props.isLoggedIn;

//     if (isLoggedIn) {
//       return <LoggedInUser />;
//     }
//   return <LoggedOutUser/>;
//   }


