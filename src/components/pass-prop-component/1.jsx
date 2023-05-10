import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

export default function PassPropsComponentExample() {
    // const example = ['A', 'B', 'C', 'D'];
    // const arrObject = ['A', 'B', 'C', 'D'];

    // const person = [
    //     {
    //         id:1,
    //         name:'nitesh',
    //         age:34
    //     },
    //     {
    //         id:2,
    //         name:'sameet',
    //         age:41
    //     },
    // ]
    // const obj = {name: 'Alice', age: 29, country: 'Austria'};

    // const user = {
    //   id: 0,
    //   name: "Chidume Nnamdi",
    //   age: 54,
    // };

    // const info ={name:'nitesh',email:'xyz@gmail.com'}
  return (
    <div>
        {/* <Example first={example[0]} second={example[1]} third={example[2]}/> */}
        {/* <Example className='bg-lime px-5 my-5'/> */}
        {/* <Example bool={true}/> */}
        {/* <Example bool={true} name={"hell welcome"} arr={arrObject} obj={person[1]}/> */}
        {/* <Example num="2"/> */}
        {/* <Example {...obj}/> */}
        {/* <Example data={obj}/> */}
        {/* <Example data={info}/> */}
        {/* <Person {...obj}/> */}
        {/* <Person name={obj.name} age={obj.age} country={obj.country}/> */}
        {/* <Sum firstNum={2} secondNum={11}/> */}
        <Example/>
    </div>
  )
}

function Example(){

  // const users = [
  //   {
  //     id:1,
  //     name:'a'
  //   },
  //   {
  //     id:2,
  //     name:'b'
  //   },
  //   {
  //     id:3,
  //     name:'c'
  //   },
  // ]
  return(
    <>
     <CustomInput/>
    </>
  )
}

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const CustomInput = () => {
  const [text,setText] = useState('');
  function handleChange(e){
    setText(e.target.value)
  }

  return(
    <>
     <Input type="text" value={text} onChange={handleChange}/>
     {text}
    </>
  )
}


// const List = ({users}) => {
//   return(
//     <>
//      {users.map((user) => {
//       return(
//         <Item key={user.id} id={user.id}>{user.name}</Item>
//       )
//      })}
//     </>
//   )
// }

// const Item = ({id,children}) => {
//   return(
//     <p>{id}- {children}</p>
//   )
// }

// const Custom = ({user,onUpdateName}) => {
//   const [name,setName] = useState(user.name);

//   function onUpdateName(e){
//     name(e.target.value);
//   }
//   return(
//     <>
//      {user.name}
//      <input type="text" value={name} onChange={handleChange}/>
//      <button type="button" onClick={() => onUpdateName(user,name)}>Update</button>
//     </>
//   )
// }

// const Custom = () => {
//   const user = {
//     name:'nitesh',
//     avatarUrl:'https://cdn.wallpapersafari.com/25/46/n6PEvV.png'
//   }
//   return(
//     <>
//      <Profile user={user}>
//       <AvatarImage user={user}/>
//      </Profile>
//     </>
//   )
// }

// const Profile = ({user,children}) => {
//   return(
//     <div className='profile'>
//       <div>{children}</div>
//       <div>
//         <p>{user.name}</p>
//       </div>
//     </div>
//   )
// }

// const AvatarImage = ({user}) => {
//   return(
//     <>
//      <img src={user.avatarUrl} className='round'/>
//     </>
//   )
// }

// const Custom = () => {

//   const [count,setCount] = useState(0);
//   const [bigtext,setBigText] = useState('Headtitle')
//   const [smalltext,setSmallText] = useState('lorem ipsum')

//   function handleCount(){
//     setCount(prevCount => prevCount + 1)
//   }
//   return(
//     <>
//       <Button disabled={false} label={count} onClick={handleCount}/>
//       <TitleBlock title={bigtext} desc={smalltext}/>
//     </>
//   )
// }

// const TitleBlock = ({title,desc}) => {
//   return(
//     <>
//      <h3>{title}</h3>
//      <p>{desc}</p>
//     </>
//   )
// }

// const Button = ({label,onClick,...others}) => {
//   return(
//     <button disabled={others.disabled} onClick={onClick}>{label}</button>
//   )
// }

// const Custom = () => {
//   const greeting = {
//     title: 'React',
//     description: 'Your component library for ...',
//   }
//   // return(
//   //   <>
//   //    <Welcome {...greeting}/>
//   //   </>
//   // )
//   return(
//     <>
//      <Welcome {...greeting}/>
//     </>
//   )
// }

const Welcome = ({title,description}) => {
  return(
    <>
     <Headline title={`Welcome to ${title}`}/>
     <Descrption paragraph={description}/>
    </>
  )
}

// const Welcome = ({text}) => {
//   return(
//     <div>
//        <Headline title={`Welcome to ${text.title}`}/>
//        <Descrption paragraph={`Welcome to ${text.description}`}/>
//     </div>
//   )
// }

const Headline = ({title}) => <h1>{title}</h1>
const Descrption = ({paragraph}) => <p>{paragraph}</p>

// const Custom = () => {
//   const greeting = "hello nitesh"
//   return(
//     <h1>{greeting}</h1>
//   )
// }

// const Custom = () => {
//   const greeting = 'Welcome to React';

//   return(
//     <>
//      <h1>{greeting}</h1>
//     </>
//   )
// }

// const Custom = (props) => {
  

//   return(
//     <>
//      <h1>{props.text}</h1>
//     </>
//   )
// }

// const Custom = ({text}) => {

//   return(
//     <>
//      <h1 style={{color:'red',padding:'10px'}}>{text}</h1>
//     </>
//   )
// }

// const Custom = () => {
//   const [greeting,setGreeting] = useState('Welcome to react')
//   const [isShow, setShow] = React.useState(true);
//   function handleChange(e){
//     setGreeting(e.target.value);
//   }

//   const label = 'button toggle'

//   const handleToggle = () => {
//     setShow(!isShow);
//   };
//   return(
//     <>
//       <Button label={label} onClick={handleToggle}/>
//       <input type="text" value={greeting} onChange={handleChange} />
//      {isShow  ? <Welcome text={greeting}/> : null}
//     </>
//   )
// }
// const Button = ({ label,onClick }) => {
//   return (
//     <button onClick={onClick} type="button">
//       {label}
//     </button>
//   );
// };

// const Welcome = ({text}) => {
//   return(
//     <h1>{text}</h1>
//   )
// }


// function Example({arr}) {
//   return (
//     <div>
//         {arr.map((title => {
//             return <div key={title}><h3>{title}</h3></div>
//         }))}
//     </div>
//   )
// }

// function Example({first,second}){
//     return(
//         <>
//         {first}
//         {second}
//         </>
//     )
// }

// function Example({first,second,third}){
//     return(
//         <>
//          {first} - {second} - {third}
//         </>
//     )
// }


// function Example({className=''}){
//     return(
//         <>
//         <div className={`text-big ${className}`}>some content</div>
//         </>
//     )
// }

// function Example({className=""}){
//     return(
//         <div className={`bg-primary ${className}`}>
//          some content 
//         </div>
//     )
// }


// function Example({bool}){
//     return(
//         <>
//          {bool && <h2>xyz@gmail.com</h2>}
//         </>
//     )
// }

// Set and Access state using a Dynamic key in React
// function Example(){
//     const [emp,setEmp] = useState({
//         id: 1, 
//         name: 'Alice', 
//         salary: 100
//     });


    
//     const key = 'salary';

//     const handleClick  = () => {
//         // ✅ set state using dynamic key
//         setEmp({
//             ...emp,
//             [key]:emp.salary + 1000
//         })
//     }
//     return(
//         <>
//         <button onClick={handleClick}>Increase Salary</button>
//          {emp.id} - {emp.name} - {emp.salary};
//         </>
//     )
// }

// function Example(){
//     const [emp,setEmp] = useState({
//         id: 1, name: 'Alice', salary: 100
//     })

//     const key = 'salary'

//     function handleClick(){
//         setEmp({
//             ...emp,
//             [key]:emp.salary+100
//         })
//     }

//     return(
//         <>
//         <button onClick={handleClick}>Increase salary</button>
//         {emp.id} - {emp.name} - {emp.salary}</>
//     )
// }

//  Check if an Object is Empty in React
// function Example(){
//     const [person,setPerson] = useState({});

//     useEffect(() => {
//        if(Object.keys(person).length === 0){
//         console.log('object is empty')
//        }
//        if(Object.keys(person).length > 0){
//         console.log('object is NOT empty')
//        }
//     },[person])

//     const btnSet = () => {
//         setPerson({
//             ...person,
//             id:1,
//             name:'nitesh'
//         })
//     }
//     return(
//         <>
//         <h2>Object: {JSON.stringify(person)}</h2>
//         <button onClick={btnSet}>
//             Set state
//         </button>
//         </>
//     )
// }

// function Example({bool,name,arr,obj}){
//     return(
//         <>
//         {bool && <p>NIesh Khatri</p>}
//          <h2>{name}</h2>
//          <p>{arr}</p>
//          <p>{obj.id} - {obj.name} - {obj.age}</p>
//         </>
//     )
// }

// function Example({num}){
//     return(
//         <>
//          2 + {num}
//         </>
//     )
// }

// function Example({name,age,country}){
//     return(
//         <>
//         <h2>{name}</h2>
//         <h2>{age}</h2>
//         <h2>{country}</h2>
//         </>
//     )
// }

// function Example({data}){
//     return(
//         <>
//          <h2>{data.name}</h2>
//          <h2>{data.age}</h2>
//          <h2>{data.country}</h2>
//         </>
//     )
// }

// function Example({data:{name,age,country}}){
//     return(
//         <>
//          <h2>{name}</h2>
//          <h2>{age}</h2>
//          <h2>{country}</h2>
//         </>
//     )
// }

// function Example({data:{name,email}}){
//     return(
//         <>
//          <h2>{name}</h2>
//          <h2>{email}</h2>
//         </>
//     )
// }

// function Person({data}) {
//     return (
//       <div>
//         <h2>{data.name}</h2>
//         <h2>{data.age}</h2>
//         <h2>{data.country}</h2>
//       </div>
//     );
//   }

//   function Person({name,age,country}){
//     return(
//         <>
//         <h2>{name}</h2>
//         <h2>{age}</h2>
//         <h2>{country}</h2>
         
//         </>
//     )
//   }

//   function Example(){
//     const data = [
//         {
//             "State": "Uttar Pradesh",
//             "Capital": "Lucknow"
//         },
//         {
//             "State": "Gujarat",
//             "Capital": "Gandhinagar"
//         },
//         {
//             "State": "Karnataka",
//             "Capital": "Bengaluru"
//         },
//         {
//             "State": "Punjab",
//             "Capital": "Chandigarh"
//         },
//         {
//             "State": "Maharashtra",
//             "Capital": "Mumbai"
//         }
//     ]

//     const listItems = data.map((val) => {
//         return(
//             <div key={val}>
//                 {val.State} - {val.Capital}
//             </div>
//         )
//     })
//     return(
//         <>
//         {listItems}
//         </>
//     )
//   }


// function Example(){
//     const data=[
//         {
//             "Name":"Nikita",
//             "Marks":"98",
//             "Phone":"123"
//         },
//         {
//            "Name":"Pratiksha",
//             "Marks":"96",
//             "Phone":"127"
//         },
//         {
//             "Name":"Muskan",
//             "Marks":"97",
//             "Phone":"163"
//         },
//         {
//            "Name":"Nishi",
//            "Marks":"95",
//            "Phone":"193"
//         },
//         {
//            "Name":"Himanshu",
//           "Marks":"78",
//           "Phone":"120"
//         }
//     ]

//     const tableRows = data.map((val) => {
//         return(
//             <tr>
//                 <td>{val.Name}</td>
//                 <td>{val.Marks}</td>
//                 <td>{val.Phone}</td>
//             </tr>
//         )
//     })
//     return(
//         <>
//         <table className='table table-bordered'>
//             <thead>
//                 <tr>
//                     <th> Name</th>
//                     <th>Marks</th>
//                     <th>Phone</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {tableRows}
//             </tbody>
//         </table>
//         </>
//     )
// }

// function RenderingExample(){
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     function handleLoginButton(){
//         if(isLoggedIn){
//             setIsLoggedIn(false);
//         }
//         else{
//             setIsLoggedIn(true);
//         }
//     }
//     return(
//         <>
//             <h1 style={{ color: 'green' }}>GeeksforGeeks</h1>
//             <h3>Conditionally Rendering Components in React</h3>
//             {isLoggedIn === false ? <DisplayLoggedOut /> : <DisplayLoggedIn />}
//             <button onClick={handleLoginButton} className="btn btn-primary">
//                 {isLoggedIn === false ? 'Log In' : 'Log Out'}
//             </button>
//         </>
//     )
// }

// function DisplayLoggedOut(){
//     return(
//         <>
//          <div style={{ background: 'green' }}>
//             <h1 style={{ color: 'white' }}> Please Login</h1>
//         </div>
//         </>
//     )
// }

// function DisplayLoggedIn(){
//     return(
//         <>
//             <div style={{ background: 'green' }}>
//                 <h1 style={{ color: 'white' }}> You are Logged In</h1>
//             </div>
//             <h3>List of Students</h3>
//             <div style={{ display: 'inline' }}>
//                 <table  className='table '>
//                     <thead >
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">First</th>
//                             <th scope="col">Last</th>
//                             <th scope="col">Address</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <th scope="row">1</th>
//                             <td>Muskan</td>
//                             <td>Roomie</td>
//                             <td>Lucknow</td>
//                         </tr>
//                         <tr>
//                             <th scope="row">2</th>
//                             <td>Pratiksha</td>
//                             <td>Singh</td>
//                             <td>Ajamgarh</td>
//                         </tr>
//                         <tr>
//                             <th scope="row">3</th>
//                             <td>Nishi</td>
//                             <td>Mehrotra</td>
//                             <td>Prayagraj</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     )
// }

// function SimpleArrayOfObjectsComponent() {
//     // set the initial state (an array with 1 object to start (this can be an empty object to start))
//     const [users, setUsers] = useState([
//       {
//         id: 1,
//         name: "Joe",
//         type: "admin"
//       }
//     ]);
//     // boolean state to know if we are editing (this will let us display
//     const [isEditing, setIsEditing] = useState(false);
//     // object state to set so we know which todo item we are editing
//     const [currentUser, setCurrentUser] = useState({});
  
//     // delcare the function
//     function handleAddNewUser() {
//       // it's important to not mutate state directly, so here we are creating a copy of the current state using the spread syntax
//       const updateUsers = [
//         // copy the current users state
//         ...users,
//         // now you can add a new object to add to the array
//         {
//           // using the length of the array for a unique id
//           id: users.length + 1,
//           // adding a new user name
//           name: "Steve",
//           // with a type of member
//           type: "member"
//         }
//       ];
//       // update the state to the updatedUsers
//       setUsers(updateUsers);
//     }
  
//     // function to get the value of the edit input and set the new state
//     function handleEditInputChange(e) {
//       // set the new state value to what's currently in the edit input box
//       setCurrentUser({ ...currentUser, name: e.target.value });
//     }
  
//     // function to handle when the "Edit user name" button is clicked
//     function handleEditClick(user) {
//       // set isEditing to true
//       setIsEditing(true);
//       // update the state to the updatedUsers
//       setCurrentUser({ ...user });
//     }
  
//     function handleUpdateUser(id, updatedUser) {
//       // here we are mapping over the users array - the idea is check if the user.id matches the id we pass into the function
//       // if the id's match, use the second parameter to pass in the updated user object
//       // otherwise just use old user
//       const updatedObject = users.map((user) =>
//         user.id === id ? updatedUser : user
//       );
//       // set editing to false because this function will be used inside an onSubmit function - which means the data was submited and we are no longer editing
//       setIsEditing(false);
//       // update the users state with the updated user
//       setUsers(updatedObject);
//     }
  
//     function handleEditFormSubmit(e) {
//       e.preventDefault();
  
//       // call the handleUpdateTodo function - passing the currentUser.id and the currentUser object as arguments
//       handleUpdateUser(currentUser.id, currentUser);
//     }
  
//     // JSX we want to return
//     return (
//       // parent div to hold the ul and li's
//       <div className="App">
//         {/* start - if the "edit user name" is clicked */}
//         {currentUser.id && isEditing && (
//           <form onSubmit={handleEditFormSubmit}>
//             <input
//               name="editTodo"
//               type="text"
//               placeholder="Edit todo"
//               value={currentUser.name}
//               onChange={handleEditInputChange}
//             />
//             <button type="submit">Update</button>
//             <button onClick={() => setIsEditing(false)}>Cancel</button>
//           </form>
//         )}
//         {/* end - edit form */}
//         <button onClick={handleAddNewUser}>Add new user</button>
//         <ul>
//           {/* map over the users array */}
//           {users.map((user) => (
//             // display a <div> element with the user.name and user.type
//             // parent element needs to have a unique key
//             <div key={user.id}>
//               <p>{user.name}</p>
//               <p>{user.type}</p>
//               {!isEditing && (
//                 <button onClick={() => handleEditClick(user)}>
//                   Edit user name
//                 </button>
//               )}
//             </div>
//           ))}
//         </ul>
//       </div>
//     );
//   }

// function Example(){

//     const courses = [
//         {
//           id: 0,
//           name: 'Full Stack Developement Program',
//           price: '89,999',
//           category: 'Software Development'
//         },
//         {
//           id: 1,
//           name: 'Python Automation Testing Program',
//           price: '64,999',
//           category: 'Testing'
//         },
//         {
//           id: 2,
//           name: 'UI/UX Program',
//           price: '89,999',
//           category: 'design'
//         }
//       ]

//       const testings = courses.filter((val) => val.category === 'design')

//       const arrayItems = testings.map((val) => {
//         return(
//             <li key={val}>
//                 <h3>{val.name}</h3>
//                 <p>{val.category} - {val.price}</p>
//             </li>
//         )
//       })

//     return(
//         <>
//         <ul>{arrayItems}</ul>
//         </>
//     )
// }

// function ReactComponent(props) {
//   const data1 = props.data1;
//   const data2 = props.data2;
//   const data3 = props.data3;
//   return (
//     <div>
//       <span>Data 1: {data1}</span>
//       <span>Data 2: {data2}</span>
//       <span>Data 3: {data3}</span>
//     </div>
//   );
// }

function Sum(props){
  const firstNum = +props.firstNum
  const secondNum = +props.secondNum


  const result = firstNum + secondNum

  return(
    <>
     <span>
        Summing {firstNum} and {secondNum}{" "}
      </span>
      <br/>
      <span>{result}</span>
    </>
  )
}

function DisplayUser(props){
  const user = props.user;
  return(
    <>
    <p>
      ID: <span>{user.id}</span>
    </p>
     <p>
      Name: <span>{user.name}</span>
     </p>
     <p>
      Age: <span>{user.age}</span>
     </p>
    </>
  )
}