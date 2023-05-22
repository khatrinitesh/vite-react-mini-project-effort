import React,{useState} from 'react'

export default function UseStateExample() {
  return (
    <>
      <Example/>
    </>
  )
}


function Example(){

  const initialState = [
    {id: 1, name:"nitesh",country: 'Canada'},
    {id: 2, name:"sameet",country: 'Belgium'},
    {id: 3,name:"sonal", country: 'Canada'},
  ];

  const [data,setData] = useState(initialState);

  const updateState = () => {
    setData(prevState => {
      const newState = prevState.map((obj) => {
        if(obj.country === 'Canada'){
          return{
            ...obj,
            name:'mayur',
            country:'dubai'
          }
        }
        return obj
      })
      return newState;
    })
  }

  const removeObjectFromArray = () => {
    setData(current =>
      current.filter(obj => {
        return obj.id !== 2;
      }),
    );
  };



  return(
    <>
     <button onClick={updateState}>Update state</button>
     {data.map((obj) => {
      return(
        <div key={obj.id}>
            <h2>id: {obj.id}</h2>
            <h2>name: {obj.name}</h2>
            <h2>country: {obj.country}</h2>
            <button onClick={removeObjectFromArray}>&times;</button>
            <hr />
        </div>
      )
     })}
    </>
  )
}


// function Example(){

//   const initialState = [
//     {id: 1, name:"nitesh",country: 'Canada'},
//     {id: 2, name:"sameet",country: 'Belgium'},
//     {id: 3,name:"sonal", country: 'Canada'},
//   ];

//   const [data,setData] = useState(initialState);

//   const updateState = () => {
//     const newState = data.map(obj => {
//       if(obj.country !== 'Canada'){
//         return{
//           ...obj,
//           name:'mayur',
//           country:'dubai'
//         }
//       }
//       // otherwise return the object property
//       return obj;
//     });
//     setData(newState);
//   }



//   return(
//     <>
//      <button onClick={updateState}>Update state</button>
//      {data.map((obj) => {
//       return(
//         <div key={obj.id}>
//             <h2>id: {obj.id}</h2>
//             <h2>name: {obj.name}</h2>
//             <h2>country: {obj.country}</h2>
//             <hr />
//         </div>
//       )
//      })}
//     </>
//   )
// }

// function Example(){
//   const datas = [
//     {
//       id: 1,
//       name: 'Nick',
//       age: 21
//     },
//     {
//       id: 2,
//       name: 'Lara',
//       age: 30
//     }
//   ];

//   const [data, setData] = useState(datas);

//   const updateState = (index) => (e) => {
//    const newArray = data.map((item,i) => {
//     if(index === i){
//       return {...item,[e.target.name]:e.target.value};
//     }
//     else{
//       return item;
//     }
//    });
//     setData(newArray);
//   }


//   return(
//     <>
//       <p>Hello, world 1!</p>
//       {data.map((val) => {
//         return(
//           <div key={val.id}> 
//             <p>{val.name}</p>
//             <button onChange={updateState}>Change</button>
//           </div>
//         )
//       })}
//     </>
//   )
// }

// function Example(){
//   const [values, setValues] = useState({
//     full_name: "nitesh arvind khatri",
//     email: "xyz@gmail.com",
//     password: "123",
//     confirmPassword: "123",
//     type: "front-end developer"
//   });

//   function handleChange(){
//     setValues({ 
//       ...values, 
//       email: 'new Value'
//     })
//   }

//   return(
//     <>
//      <p>{values.full_name}</p>
//      <p>{values.email}</p>
//      <p>{values.full_name}</p>
//      <p>{values.password}</p>
//      <p>{values.confirmPassword}</p>
//      <p>{values.type}</p>
//      <button onClick={handleChange}>Change</button>
//     </>
//   )
// }

// function Example(){

//   const [useDetails,setUseDetails] = useState({
//     name:'nitesh khatri',
//     age:34,
//     jobtitle:'front-end developer'
//   })
//   function handleChange(){
//     setUseDetails({
//       ...useDetails,
//       name:'sameet khatri',
//       age:41,
//       jobtitle:'software developer'
//     })
//   }
//   return(
//     <>
//       <h3>{useDetails.name}</h3>
//       <p>{useDetails.age}</p>
//       <p>{useDetails.jobtitle}</p>
//       <button onClick={handleChange}>Click change text</button>
//     </>
//   )
// }

// function Example(){

//   const [computer,setComputer] = useState({
//     keyboard:'Dell',
//     mouse:'hp'
//   });

//   const btnChange =()=>{
//     setComputer(prevState => ({
//       keyboard:'mac',
//       mouse:'iball'
//     }));
//   }

//   return(
//     <>
//      <h1>my favorite computer is {computer.keyboard}</h1>
//      <h1>my favorite computer is {computer.mouse}</h1>
//      <button onClick={btnChange}>Click</button>
//     </>
//   )
// }


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