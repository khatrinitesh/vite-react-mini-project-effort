import React,{useState} from 'react'

export default function UseStateExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){

  const [computer,setComputer] = useState({
    keyboard:'Dell',
    mouse:'hp'
  });

  const btnChange =()=>{
    setComputer(prevState => ({
      keyboard:'mac',
      mouse:'iball'
    }));
  }

  return(
    <>
     <h1>my favorite computer is {computer.keyboard}</h1>
     <h1>my favorite computer is {computer.mouse}</h1>
     <button onClick={btnChange}>Click</button>
    </>
  )
}


// function Example(){
//   const [emp,setEmp] = useState({
//     Id:"",
//     Name:"",
//     Location:"",
//     Salary:""
//   });

//   const handleForm = (e) => {
//     e.preventDefault();
//     setEmp({
//       ...emp,
//       [e.target.name]:e.target.value
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(emp);
//   }


//   return(
//     <>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>ID</label>
//           <input type="text" name="Id" value={emp.Id} onChange={handleForm}/>
//         </div>
//         <div>
//           <label>Name</label>
//           <input type="text"  name="Name" value={emp.Name} onChange={handleForm}/>
//         </div>
//         <div>
//           <label>Location</label>
//           <input type="text"  name="Location" value={emp.Location} onChange={handleForm}/>
//         </div>
//         <div>
//           <label>Salary</label>
//           <input type="text"  name="Salary" value={emp.Salary} onChange={handleForm}/>
//         </div>
//         <p>
//         Employee ID is : <b>{emp.Id}</b>, 
//         <br/>
//         Name is : <b>{emp.Name}</b> ,
//         <br/>
//         Location is : <b>{emp.Location}</b> 
//         <br/>
//         Salary is : <b>{emp.Salary}</b>
//         </p>
//         <SalaryComponent onSalaryChange={handleForm} salary={emp.salary}/>
//       </form>
//     </>
//   )
// }

// const SalaryComponent = ({onSalaryChange,salary}) => {

//   function changeSalary(e){
//     onSalaryChange(e);
//   }
  
//   return(
//     <>
//      <div style={{border:'3px solid red'}}>
//         <h2>Welcome to Salary Component</h2>
//         <p>
//           <label>Employee Salary : 
//             <input type="text" name="Salary" value={salary} onChange={changeSalary}/>
//           </label>
//         </p>
//      </div>
//     </>
//   )
// }

// conditional rendering
// function Example(){

//     const isLoggedIn = false;
//     if(isLoggedIn){
//         return(
//             <div>nitesh khatri</div>
//         )
//     }
//     else{
//         return(
//             <div>sameet khatri</div>
//         )
//     }
// }

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