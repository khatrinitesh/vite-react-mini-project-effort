import React,{ useState,useEffect,useCallback ,useMemo, createContext, useContext, useReducer, useRef }  from 'react';
// import {
//     Button,
//     EditableText,
//     InputGroup,
//     Toaster,
//     Position,
//   } from "@blueprintjs/core";
  import './custom.css';
import { ImageSearch, SettingsSystemDaydreamRounded } from '@mui/icons-material';
import { functionsIn, parseInt } from 'lodash';
import "bootstrap/dist/css/bootstrap.css";
import { render } from 'react-dom';
import './custom.css'
import axios from 'axios';

export default function AssignmentOne() {
  return (
    <>
      <Example/>
    </>
  )
}

// example 54 => Higher order component
function Example(){
  return(
    <>
     <Stu1/>
     <Stu2/>
    </>
  )
}
const Higherordercom = (Student) => {
  const Highordercominner = () => {
    const [num,setNum] = useState(0)
    const handleEvent = () => {
      setNum(num + 10)
    }
    return(
      <Student num={num} handleEvent={handleEvent}/>
    )
  }
  return Highordercominner;
}
const Stu1 = (props) => {
  return(
    <>
     <h3>{props.name}</h3>
     <button onClick={() => props.handleEvent()}>Count Increment</button>
    </>
  )
}
const Stu2 = (props) => {
  return(
    <>
     <h3>{props.name}</h3>
     <button onClick={props.handleEvent}>Count Increment</button>
    </>
  )
}

// example 53 => contexg api 
// function Example(){

//   return(
//     <>
//      <Main/>
//     </>
//   )
// }

// export const AppContext = createContext(null);
// const Main = () => {
//   const [name,setName] = useState('nitesh')
//   const [count,setCount] = useState(0);

//   return(
//     <>
//     <AppContext.Provider value={{name,setName,count,setCount}}>
//       <A/>
//     </AppContext.Provider>
//     </>
//   )
// }
// const A = () => {
//   const {name,count} = useContext(AppContext)
//   return(
//     <>
//     <h1>A parent</h1>
//     {count} - {name}
//     <B/>
//     </>
//   )
// }
// const B = () => {
//   const {name,count} = useContext(AppContext)
//   return(
//     <>
//      <h1>B Child</h1>
//      {count} - {name}
//      <C/>
//     </>
//   )
// }

// const C = () => {
//   const {name,setName,count,setCount} = useContext(AppContext)
//   return(
//     <>
//      <h1>C Child</h1>
//      <button onClick={() => setCount(count + 5)}>Increment</button>
//      <h1>{count}</h1>
//     </>
//   )
// }
// example 52 => how to checkbed
// function Example(){
//   const [isChecked, setIsChecked] = useState(true);

//   const handleChange =(e) => {
//     e.preventDefault();
//     setIsChecked(e.target.checked)
//     console.log(setIsChecked(e.currentTarget.checked))
//   } 

//   return(
//     <>
//      <input type="checkbox" onChange={handleChange} checked={isChecked}/>
//      {isChecked ? 'Checked' : 'Not checked'}
//     </>
//   )
// }

// example 51 => how to generate dynamic form using JSON with react
// const data  = {
//   "form":{
//     "sections":[
//       {
//         "order":1,
//         "section_title":"Basic information",
//         "fields":[
//           {
//             "name":"name",
//             "label":"Name",
//             "required":true,
//             "data_type":"Integer",
//             "html_element":"textbox"
//           },
//           {
//             "name":"email",
//             "label":"Email",
//             "required":false,
//             "data_type":"String",
//             "html_element":"email"
//           },
//           {
//             "name":"phone",
//             "label":"Phone",
//             "required":true,
//             "data_type":"number",
//             "html_element":"textbox"
//           },
//           {
//             "name":"age",
//             "label":"Age",
//             "hidden":false,
//             "data_type":"number",
//             "html_element":"number"
//           },
//           {
//             "name":"photo",
//             "label":"Photo",
//             "hidden":false,
//             "data_type":"Image",
//             "html_element":"file"
//           },
//         ]
//       }
//     ]
//   }
// }
// const onSubmit = (e) => {
//   e.preventDefault();
//   console.log(formData.name)
// }
// function Example(){
//   return(
//     <>
//     <form onSubmit={onSubmit}>
//      {data.form.sections.map(formData => {
//         return(
//           <div>
//             <h1>{formData.section_title}</h1>
//             {formData.fields.map((val) => {
//               return(
//                 <>
//                  <h2>{val.name}</h2>
//                  <label>{val.label}</label>
//                  <input type={val.html_element} required={val.required} name={val.name} datatype={val.data_type} />
//                  <button type="submit">Submit</button>
//                 </>
//               )
//             })}
//           </div>
//         )
//      })}
//      </form>
//     </>
//   )
// }

// example 50 => lifecycle axios
// function Example(){
  

//   const [state,setState] = useState([])
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/todos').then((example) => {
//       console.log('example',example)
//       if(example.status === 200){ 
//         setState(example.data)
//       }
//       else{
//         console.log('no data')
//       }
//     }).catch(error => {
//       console.log(error)
//     })

//     // fetch('https://jsonplaceholder.typicode.com/todos')
//     // .then((res) => res.json())
//     // .then((data) => setState(data))
//     // alert('hello how are you')
//   },[])
//   return(
//      <>
//       <h2>LifeCycle 2</h2>
//       <table className="table">
//         <thead>
//         <tr>
//           <th>Customer Code</th>
//           <th>Customer Name</th>
//         </tr>
//         </thead>
//         <tbody>
//           {state.map((val) => {
//             return(
//               <tr>
//                <td align='center'>{val.id}</td>
//                <td>{val.title}</td>
//               </tr>
//             )
//           })}
//           </tbody>
//       </table>
//      </>
//   )
// }

// example 49 => lifeCycle 
// function Example(){

//   const [inc,setInc] = useState(0);
//   const [dec,setDec] = useState(0);

//   useEffect(() => {
//       console.log('I am increment')
//   },[inc])
//   useEffect(() => {
//     console.log('I am decrement')
// },[dec])
// useEffect(() => {
//   console.log('i am call on every render and update')
// })

// const btnInc = () => {
//   setInc(inc => inc + 1)
// }
// const btnDec = () => {
//   setDec(dec => dec - 1)
// }
//   return(
//     <>
//     {inc} - {dec}
//      <button onClick={btnInc}>+</button>
//      <button onClick={btnDec}>-</button>
//     </>
//   )
// }

// example 48 => hooks array useState with array
// function Example(){
//   const [state,setState] = useState([]);
//   const [arrArray,setArrarray] = useState([]);

//   const submit = (e) => {
//     e.preventDefault();
//     setArrarray(prev => [...prev,state])
//     console.log('state',state)
//   }

//   const onChange = (e) => {
//     e.preventDefault();
//     console.log('onChange',e.target.value)
//     setState(e.target.value)
//   }

//   const btnDel = (index) => {
//     arrArray.splice(index,1);
//     setArrarray([...arrArray])
//   }
//   return(
//     <>
//      <form onSubmit={submit}>
//       <input type='text' onChange={onChange}/>
//       <button type='submit'>Add Item</button>
//       <ul>
//          {arrArray.map((val,index) => {
//           return(
//             <li key={index}>{val} <button onClick={() => btnDel(index)}>&times;</button></li>
//           )
//          })}
//       </ul>
//      </form>
//     </>
//   )
// }

// example 47 => useState with object lesson
// function Example(){
//   const [name,setName] = useState({
//     fname:'',
//     lname:''
//   });

//   const submit = (e) => {
//     e.preventDefault();
//     console.log('Submit',{...name})
//   }

//   const onChangeSetData = (e) => {
//     e.preventDefault()
//     setName({...name,fname:e.target.value})
//   }
//   const onChangeSetData2 = (e) => {
//     e.preventDefault()
//     setName({...name,lname:e.target.value})
//   }
//   return(
//     <>
//       <form onSubmit={submit}>
//         <label>firstname</label>
//         <input type="text" onChange={onChangeSetData}/>
//         <br/>
//         <label>lastname</label>
//         <input type="text" onChange={onChangeSetData2}/>
//         <div>{JSON.stringify(name)}</div>
//         <button type="submit">Submit</button>
//       </form>
//       {name.fname}
//       <br/>
//       {name.lname}
//       </>
//   )
// }

// example 46 => how to iterate list keys 
// function Example(){
//   const employees = [
//     {id: 1, name: 'Alice', country: 'Austria'},
//     {id: 2, name: 'Bob', country: 'Belgium'},
//     {id: 3, name: 'Carl', country: 'Canada'},
//     {id: 4, name: 'Dean', country: 'Denmark'},
//     {id: 5, name: 'Ethan', country: 'Egypt'},
//   ];

//   const [list,setList] = useState(employees)

//   const btnDel  =(id) => {
//     const newList = list.filter((val) => val.id !== id)
//     setList(newList)
//   }

//   return(
//     <>
//      {list.map((val) => {
//       return(
//         <div key={val.id}>
//           <h3>{val.name}</h3>
//           <p>{val.country}</p>
//           <button onClick={() => btnDel(val.id)}>&times;</button>
//         </div>
//       )
//      })}
//     </>
//   )
// }
// function Example(){
//     const employees = [
//     {id: 1, name: 'Alice', country: 'Austria'},
//     {id: 2, name: 'Bob', country: 'Belgium'},
//     {id: 3, name: 'Carl', country: 'Canada'},
//     {id: 4, name: 'Dean', country: 'Denmark'},
//     {id: 5, name: 'Ethan', country: 'Egypt'},
//   ];

//   const result = []
//   for (const val of employees){
//     result.push(
//       <div key={val.id}>
//         <h3>{val.name}</h3>
//         <p>{val.country}</p>
//       </div>
//     )
//   }
//   return(
//     <>
//      {result}
//     </>
//   )
// }
// function Example(){
//   const employees = [
//     {id: 1, name: 'Alice', country: 'Austria'},
//     {id: 2, name: 'Bob', country: 'Belgium'},
//     {id: 3, name: 'Carl', country: 'Canada'},
//     {id: 4, name: 'Dean', country: 'Denmark'},
//     {id: 5, name: 'Ethan', country: 'Egypt'},
//   ];
//   return(
//     <>
//      {employees.map(({id,name,country}) => {
//       return(
//         <div key={id}>
//           <h3>{name}</h3>
//           <p>{country}</p>
//         </div>
//       )
//      })}
//     </>
//   )
// }
// function Example(){
//   const employees = [
//     {id: 1, name: 'Alice', country: 'Austria'},
//     {id: 2, name: 'Bob', country: 'Belgium'},
//     {id: 3, name: 'Carl', country: 'Canada'},
//     {id: 4, name: 'Dean', country: 'Denmark'},
//     {id: 5, name: 'Ethan', country: 'Egypt'},
//   ];

//   const results = []

//   for(const emp of employees){
//     results.push(
//       <div key={emp.id}>
//         <h3>{emp.name}</h3>
//         <p>{emp.country}</p>
//       </div>
//     )
//   }

//   return(
//     <>
//      {results}
//     </>
//   )
// }

// example 45 => how to calculator add minus useMemo
// function Example(){
//   const [num1,setNum1]  = useState(0)
//   const [num2,setNum2]  = useState(0)

//   const add = (a,b) => {
//     return parseInt(a) + parseInt(b)
//   }
//   const minus = (a,b) => {
//     return parseInt(a) - parseInt(b)
//   }

//   const calc1 = useMemo(() => {
//     return add(num1,num2)
//   },[num1,num2])
//   const calc2 = useMemo(() => {
//     return minus(num1,num2)
//   },[num1,num2])

//   const handleChangeOne = (e) => {
//     e.preventDefault();
//     setNum1(e.target.value)
//   }
//   const handleChangeTwo = (e) => {
//     e.preventDefault();
//     setNum2(e.target.value)
//   }
//   return(
//     <>
//      <div>
//       <input type="text" value={num1} onChange={handleChangeOne}/>
//       <input type="text" value={num2} onChange={handleChangeTwo}/>
//       <br/>
//       {calc1}
//       <br/>
//       {calc2}
//      </div>
//     </>
//   )
// }

// example 44 => inline stying object
// function Example(){
//   const myComponentStyle = {
//     height: '200px',
//     width: '200px',
//     background: 'goldenrod',
//     textAlign: 'center'

// }
//   return(
//     <>
//      <h1 style={myComponentStyle}>Heading title</h1>
//      <h1 className='my-component-style'>Heading title</h1>
//     </>
//   )
// }

// example 44 => how to use callback
// function Example(){

//   const handleClick  = useCallback(() =>{
//     console.log('nitesh khatri')
//   })
//   return(
//     <>
//      <ButtonWrapper onClick={handleClick}/>
//     </>
//   )
// }
// function ButtonWrapper ({onClick}) {
//   return(
//     <> 
//     <button onClick={onClick}>I am a child</button>
//     </>
//   )
// }
// example 46 => how to iterate list keys 
// function Example(){
//   const employees = [
//     {id: 1, name: 'Alice', country: 'Austria'},
//     {id: 2, name: 'Bob', country: 'Belgium'},
//     {id: 3, name: 'Carl', country: 'Canada'},
//     {id: 4, name: 'Dean', country: 'Denmark'},
//     {id: 5, name: 'Ethan', country: 'Egypt'},
//   ];
//   return(
//     <>
//      {employees.map(({id,name,country}) => {
//       return(
//         <div key={id}>
//           <h3>{name}</h3>
//           <p>{country}</p>
//         </div>
//       )
//      })}
//     </>
//   )
// }
// function Example(){
//   const employees = [
//     {id: 1, name: 'Alice', country: 'Austria'},
//     {id: 2, name: 'Bob', country: 'Belgium'},
//     {id: 3, name: 'Carl', country: 'Canada'},
//     {id: 4, name: 'Dean', country: 'Denmark'},
//     {id: 5, name: 'Ethan', country: 'Egypt'},
//   ];

//   const results = []

//   for(const emp of employees){
//     results.push(
//       <div key={emp.id}>
//         <h3>{emp.name}</h3>
//         <p>{emp.country}</p>
//       </div>
//     )
//   }

//   return(
//     <>
//      {results}
//     </>
//   )
// }

// example 45 => how to calculator add minus useMemo
// function Example(){
//   const [num1,setNum1]  = useState(0)
//   const [num2,setNum2]  = useState(0)

//   const add = (a,b) => {
//     return parseInt(a) + parseInt(b)
//   }
//   const minus = (a,b) => {
//     return parseInt(a) - parseInt(b)
//   }

//   const calc1 = useMemo(() => {
//     return add(num1,num2)
//   },[num1,num2])
//   const calc2 = useMemo(() => {
//     return minus(num1,num2)
//   },[num1,num2])

//   const handleChangeOne = (e) => {
//     e.preventDefault();
//     setNum1(e.target.value)
//   }
//   const handleChangeTwo = (e) => {
//     e.preventDefault();
//     setNum2(e.target.value)
//   }
//   return(
//     <>
//      <div>
//       <input type="text" value={num1} onChange={handleChangeOne}/>
//       <input type="text" value={num2} onChange={handleChangeTwo}/>
//       <br/>
//       {calc1}
//       <br/>
//       {calc2}
//      </div>
//     </>
//   )
// }

// example 44 => inline stying object
// function Example(){
//   const myComponentStyle = {
//     height: '200px',
//     width: '200px',
//     background: 'goldenrod',
//     textAlign: 'center'

// }
//   return(
//     <>
//      <h1 style={myComponentStyle}>Heading title</h1>
//      <h1 className='my-component-style'>Heading title</h1>
//     </>
//   )
// }

// example 44 => how to use callback
// function Example(){

//   const handleClick  = useCallback(() =>{
//     console.log('nitesh khatri')
//   })
//   return(
//     <>
//      <ButtonWrapper onClick={handleClick}/>
//     </>
//   )
// }
// function ButtonWrapper ({onClick}) {
//   return(
//     <> 
//     <button onClick={onClick}>I am a child</button>
//     </>
//   )
// }
// function Example(){
//   const [count,setCount] = useState(0)

//   const handleCountInc = useCallback(() => {
//     setCount(count => count + 1)
//   },[])
//   const handleCountDec = useCallback(() => {
//     setCount(count => count - 1)
//   },[])
//   return(
//     <>
//      {count}
//      <button onClick={handleCountInc}>Click count increment</button>
//      <button onClick={handleCountDec}>Click count decrement</button>
//     </>
//   )
// }

// example 43 => how to pass props
// function Example(){
//   return(
//     <>
//     <Parent>
//       <ChildA>
//         <ChildB user="nitesh khatri"/>
//       </ChildA>
//     </Parent>
//     </>
//   )
// }
// const Parent = ({children}) => {
//   return(
//     <>
//     <h3>Parent component</h3>
//     {children}
//     </>
//   )
// }
// const ChildA = ({children}) => {
//   return(
//     <>
//     <h3>Child A</h3>
//     {children}
//     </>
//   )
// }
// const ChildB = ({user}) => {
//   return(
//     <>
//     <h3>Child B {user}</h3>
//     </>
//   )
// }
// function Example(){

//   const admin = {name:'nitesh',age:34}

//   return(
//     <>
//      <h2>Option 1</h2>
//      <User name="nitesh" age={34}/>
//      <hr/>
//      <h2>Option 2</h2>
//      <User name={admin.name} age={admin.age}/>
//      <hr/>
//      <h2>Option 3</h2>
//      <User name={admin.name} age={admin.age}/>
//      <hr/>
//      <h2>Option 4</h2>
//      <User {...admin}/>
//     </>
//   )
// }
// const User = ({name,age}) => {
//   return(
//     <>
//      <h4>{name} - {typeof name}</h4>
//      <p>{age}- {typeof age}</p>
//     </>
//   )
// }

// example 42 => how to create dynaimc table data 
// const GROUP_1 = [
//   { id: 1, name: 'Tom',  age: 22 },
//   { id: 2, name: 'Adam', age: 43 },
//   { id: 3, name: 'Mark', age: 16 },
//   { id: 4, name: 'John', age: 29 }
// ]
// const GROUP_2 = [
//   { id: 1, name: 'Kate', age: 23 },
//   { id: 2, name: 'Ann',  age: 18 }
// ];

// function Example(){
//   const [students,setStudents] = useState(GROUP_1);
 
//   return(
//     <>
//        <div>
//         <div>
//           <button onClick={() => setStudents(GROUP_1)}>Show GROUP_1</button>
//           <button onClick={() => setStudents(GROUP_2)}>Show GROUP_2</button>
//         </div>
//         <br />
//         <Table students={students} />
//       </div >
//     </>
//   )
// }
// const students = [
//   { id: 1, name: 'Tom',  age: 25 },
//   { id: 2, name: 'Adam', age: 43 },
//   { id: 3, name: 'Mark', age: 16 },
//   { id: 4, name: 'John', age: 29 }
// ]
// function Table({students}){
//   const tableStyle = {
//     border: '1px solid black',
//     borderCollapse: 'collapse'
// }

// const tdStyle = {
//   	border: '1px solid black',
// };
//   return(
//     <>
//      <div>
//       <table style={tableStyle}>
//         <tr>
//           <th style={tdStyle}>Id</th>
//           <th style={tdStyle}>Name</th>
//           <th style={tdStyle}>Age</th>
//         </tr>
//         {students.map(({ id, name, age }) => (
//           <tr key={id}>
//             <td style={tdStyle}>{id}</td>
//             <td style={tdStyle}>{name}</td>
//             <td style={tdStyle}>{age}</td>
//           </tr>
//         ))}
//       </table>
//      </div>
//     </>
//   )
// }

// example 41 => get value of an input element
// function Example(){

//   const [username,setUsername] = useState('your username');
//   const inputRef = useRef();

//   const handleChange = (e) => {
//     setUsername(inputRef.current.value)
//   }
//   return(
//     <>
//     <h1>{username}</h1>
//     <div>
//       <label>insert username:</label>
//       <input type="text" ref={inputRef} onChange={handleChange}/>
//     </div>
//     </>
//   )
// }

// example 40 => get react component size before render operation 
// function Example(){

//   const reference = useRef();
//   const [dimensions,setDimensions] = useState({
//     width:0,
//     height:0
//   })

//   useEffect(() => {
//     if(reference.current){
//       setDimensions({
//         width:reference.current.offsetWidth,
//         height:reference.current.offsetHeight,
//       })
//     }
//   },[])
//   return(
//     <>
//       <div ref={reference}>
//         <pre>
//           Container <br/>
//           - width : {dimensions.width}
//           - height : {dimensions.height}
//         </pre>
//       </div>
//     </>
//   )
// }

// example 39 => get number value from an input 
// function Example(){
//   const [number,setNumber] = useState(20);
//   const inputRef = useRef();

//   const handleChange =(e)=>{
//     e.preventDefault();
//     setNumber(parseInt(inputRef.current.value))
//   }

//   return(
//     <>
//       <h2>{number}</h2>
//      <label>insert number</label>
//      <input type="text" ref={inputRef} onChange={handleChange}/>
//     </>
//   )
// }

// example 38 => get input reference
// function Example(){

//   const inputRef = useRef();
//   return(
//     <>
//      <input defaultValue="Example text here..." ref ={inputRef}/>
//      <button onClick={() => console.log(inputRef.current)}>check reference</button>
//      <button onClick={() => console.log(inputRef.current.value)}>check value</button>
//     </>
//   )
// }

// example 37 => get div reference
// function Example(){
//   const divStyle = {
//       height: '20px',
//       background: 'yellow',
//       border: 'solid',
//       borderColor: 'red'
//   };
//   const divRef = useRef();
//   return(
    
//     <>
//     <div ref={divRef} style={divStyle}>
//       <b>My Div</b>
//     </div>
//     <div onClick={() => console.log(divRef.current)}>Check reference</div>
//     <div onClick={() => console.log(divRef.current.innerHTML)}>Check reference</div>
//     <div onClick={() => console.log(divRef.current.innerText)}>Check reference</div>
//     <div onClick={() => console.log(divRef.current.outerHTML)}>Check reference</div>
//     </>
//   )
// }

// example 36 => select inputs 
// function Example(){
//   const [state,setState] = useState({
//     level:'master'
//   })

//   const handleChange =(e)=>{
//     e.preventDefault();
//     const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
//     setState({
//       ...state,
//       [e.target.name]:value
//     })
//   }
//   return(
//     <>
//      <form>
//       <div>
//         <label>Acolyte
//           <input type="radio" name="level" value="acolyte" checked={state.level ==='acolyte'} onChange={handleChange}/>
//         </label>
//       </div>
//       <div>
//       <label>
//           Master
//           <input
//             type="radio"
//             name="level"
//             value="master"
//             checked={state.level === "master"}
//             onChange={handleChange}
//           />
//         </label>
//       </div>
//       {state.level}
//      </form>
//     </>
//   )
// }
// function Example(){
//   const [state,setState] = useState({
//     version:'16.8'
//   })

//   const handleChange =(e)=>{
//     e.preventDefault();
//     setState(e.target.value)
//   }

//   return(
//     <>
//      <form>
//       <label>
//         Favorite version
//         <select name="version" value={state} onChange={handleChange}>
//           <option value="16.8">v16.8.0</option>
//           <option value="16.7">v16.7.0</option>
//           <option value="16.6">v16.6.0</option>
//           <option value="16.5">v16.5.0</option>
//         </select>
//       </label>
//      </form>
//      {state}
//     </>
//   )
// }

// example 35 => form reset class and functional components
// class Example extends React.Component{

//   constructor(props){
//     super(props)
//     this.state = {
//       data:{}
//     }
//   }

//   handleChange = (e) => {
//     e.preventDefault();
//     const target = e.target;
//     this.setState({
//       data:{...this.state.data,[target.name]:target.value}
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.setState({
//       state:this.state.data
//     })
//     console.log(this.state.data)
//   }


//   render(){
//     return(
//       <>
//        <form onSubmit={this.handleSubmit}>
//         <div>
//           <label>Username</label>
//           <input type="text" name="username" value={this.username} onChange={this.handleChange}/>
//         </div>
//         <div>
//           <label>password</label>
//           <input type="text" name="password" value={this.password} onChange={this.handleChange}/>
//         </div>
//         <button type="submit">Submit</button>
//        </form>
//       </>
//     )
//   }
// }
// function Example(){
  

//   const [data,setData] = useState(
//     {username:'',password:''}
//   )

//   const handleChange = (e) => {
//     const target = e.target;
// 		setData({ 
//       ...data, 
//       [target.name]:target.value
//     });
//   }

//   const handleReset = () => {
//     setData({
//       usermame:'',
//       password:''
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setData(data)
//     console.log(setData(data.username))
//   }

//   return(
//     <>
//      <form onSubmit={handleSubmit}>
//        <div>
//         <label>username</label>
//         <input type="text" name="username" value={data.username} onChange={handleChange}/>
//        </div>
//        <div>
//         <label>password</label>
//         <input type="text" name="password" value={data.password} onChange={handleChange}/>
//        </div>
//        <button type="reset" onClick={handleReset}>Reset</button>
//        <button type="submit">Submit</button>
//        {data.username}
//        {data.password}
//      </form>
//     </>
//   )
// }

// example 34 => conext api 
// // reducer 
// const counterReducer = (state,action) => {
//   switch(action.type){
//     case 'INCREMENT':return state + 1;
//     case 'DECREMENT':return state - 1;
//     default:return state;
//   }
// }

// // Context 
// const CounterContext = createContext();

// // Provider
// function Example({children}){
//   const [state,dispatch] = useReducer(counterReducer,0)
//   return(
//     <CounterContext.Provider value={{state,dispatch}}>
//       {children}
//     </CounterContext.Provider>
//   )
// }

// example 33 => how to filter an array of object 
// function Example(){
//   const users = [
//     {id:1,name:'nitesh',status:'inactive'},
//     {id:2,name:'sameet',status:'active'},
//     {id:3,name:'urvashi',status:'active'},
//     {id:4,name:'arvind',status:'active'},
//     {id:5,name:'manisha',status:'inactive'},
//   ]
// const filtered_users_active = users.filter((val) => val.status ==='active');
// const filtered_users_inactive = users.filter((val) => val.status ==='inactive');
// return(
//   <>
//    <div>
//     <h3>Active users</h3>
//     {filtered_users_active.map((item) =>{
//       return(
//         <div key={item.id}>
//           <h3>{item.name}</h3>
//           <p>{item.status}</p>
//         </div>
//       )
//     })}
//     <hr/>
//     <h3>Inactive users</h3>
//     {filtered_users_inactive.map((item) =>{
//       return(
//         <div key={item.id}>
//           <h3>{item.name}</h3>
//           <p>{item.status}</p>
//         </div>
//       )
//     })}
//    </div>
//   </>
// )
// }

// example 32 => how to filter an array of object 
// function Example(){

//   const employees= [
//     {
//       id:1,name:'nitesh',age:34,department:'front-end dev'
//     },
//     {
//       id:2,name:'sameet',age:41,department:'field service engineering'
//     },
//     {
//       id:3,name:'urvashi',age:65,department:'housewife'
//     },
//     {
//       id:4,name:'arvind',age:68,department:'ladies tailor'
//     },
//     {
//       id:5,name:'manisha',age:41,department:'account assistant'
//     },
//   ]

//   const [emps,setEmps] = useState(employees);
  
//   return(
//     <>
//     <ul>
//       {emps.map((emp) => {
//         const {name,department,id} = emp;
//         return(
//         <li key={id}> 
//           <div>
//             Name: <strong>{name}</strong>
//           </div>
//           <div>
//             Department <strong>{department}</strong>
//           </div>
//         </li>
//         )
//       })}
      
//       </ul>
//     </>
//   )
// }

// example 31 => fetch data on button click
// function Example(){
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [err, setErr] = useState('');

//   const handleClick = async () => {
//     setIsLoading(true)
//     try{
//       const response = await fetch('https://reqres.in/api/users',{
//         method:'GET',
//         headers:{
//           Accept:'application/json,'
//         },
//       });
//       if(!response.ok){
//         throw new Error(`Error! status: ${response.status}`);
//       }
//       const result = await response.json();
//       console.log('result is:',JSON.stringify(result,null,4));
//       setData(result.data)
//     }
//     catch(err){
//       setErr(err.message)
//     }
//     finally{
//       setIsLoading(false)
//     }
//   }

//   console.log(data);
//   return(
//     <>
//      {/* {err & <div>{err}</div>} */}

//      <button onClick={handleClick}>fetch data</button>

//      {isLoading && <h2>Loading...</h2>}

//      {data.map((person) => {
//       return(
//         <div key={person.id}>
//           <h2>{person.email}</h2>
//           <h2>{person.first_name}</h2>
//           <h2>{person.last_name}</h2>
//           <br/>
//         </div>
//       )
//      })}
//     </>
//   )
// }

// example 30 => fetch api data on button click 
// function Example(){
//   const [data,setData] = useState([]);

// useEffect(() => {
//   fetch('https://jsonplaceholder.typicode.com/albums')
//   .then((res) => res.json())
//   .then((data) => setData(data))
// })
//   return(
//     <>
//      {data.map((val) => {
//       return(
//         <div>{val.title}</div>
//       )
//      })}
//     </>
//   )
// }
// function Example(){
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1`)
//         const newData = await response.json()
//         setData(newData)
//     };

//       fetchData();
//   }, [])

//   if(data){
//     console.log(data)
//     return(
//       <div>{data.title}</div>
//     )
//   }
//   else{
//     return null;
//   }
// }
// function Example(){
//   const [id,setId] = useState('')
//   const [data,setData] = useState(null)

//   const handleClick = async () => {
//     try{
//       const data = await(await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)).json()
//       setData(data)
//       console.log(setData(data))
//     }
//     catch(err){
//       console.log(err.message)
//     }
//   }
//   const handleChange = (e) => {
//     e.preventDefault();
//     setId(e.target.value)
//   }
//   return(
//     <>
//      <input type="text" required="required" placeholder='Enter an ID' value={id} onChange={handleChange}/>
//      <button type="submit" onClick={handleClick} >Search</button>
//     </>
//   )
// }

// example 29 => conditional rendering 
// function Example(){
//   const [list,setList] = useState([
//     {id:1,name:'apple'},
//     {id:2,name:'banana'},
//   ])

//   const itemCounter = list.length
//   return(
//     <>
//      {itemCounter === 0 ? <h1>no items to buy</h1> : list.map((val) => {
//       return(
//         <ShoppingItem  key={val.id} id={val.id} name={val.name}/>
//       )
//      })}
//     </>
//   )
// }
// const ShoppingItem = (props) => {
//   return(
//     <>
//      <p>{props.id} - </p>
//      <p>{props.name}</p>
//     </>
//   )
// }
// function Example(){
//   const [list,setList] = useState([
//     {id:1,name:'apple'},
//     {id:2,name:'banana'},
//   ])

//   const itemsCounter = list.length
//   return(
//     <>
//      {itemsCounter === 0 ?  <h1>no items to buy</h1>  : list.map((val) => {
//       return(
//         <ShoppingList key={val.id} name={val.name} id={val.id}/>
//       )
//      })} 
//     </>
//   )
// }

// const ShoppingList = (props) => {
//   const {id,name} = props
//   return(
//     <>
//      <h3>{id}</h3>
//      <p>{name}</p>
//     </>
//   )
// }


// example 28 => componentDidMount and componentWillUnMount (class component)
// class Example extends React.Component{

//   constructor(props){
//     super(props)
//     this.state = {
//       visible:true
//     }
//   }

//   componentDidMount(){
//     console.log('component did mount')
//   }

//   componentWillUnmount(){
//     console.log('component will unmount')
//   }

//   handleMount = () => {
//     this.setState({
//       visible:true
//     })
//   }
//   handleUnMount = () => {
//     this.setState({
//       visible:false
//     })
//   }


//   render(){
//     return(
//       <>
//         <button onClick={this.handleMount}>Mount my component</button>
//         <button onClick={this.handleUnMount}>Unmount my component</button>
//         {this.state.visible && <Nitesh/>}
//       </>
//     )
//   }
// }

// function Nitesh(){
//   return(
//     <>nitesh khatri</>
//   )
// }

// example 27 => comment source code
// function Example(){
//   return(
//     <>
//      {
//         //Some comment here...
//         //Some comment here...
//       }
//       <div>Users:</div>
//       {/*
//         <div>
//           <span>Name:</span>
//           <span>John</span>
//         </div>
//       */}
//     </>
//   )
// }

// example 26 => class component force re-render
// class Example extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       counter:0
//     }
//     this.handleCount = this.handleCount.bind(this)
//   }
//   handleCount = () => {
//     this.setState({
//       counter:this.state.counter + 1
//     })
//   }
//   render(){
//     return(
//       <>
//       {this.state.counter}
//        <button onClick={this.handleCount}>Force re-rendering</button>
//       </>
//     )
//   }
// }

// example 25 => checkbox example 
// function Example(){

//   const [agreement,setAgreement] = useState(false);
//   const handleChange = (e) => {
//     e.preventDefault(
//       setAgreement(e.target.checked)
//     )
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`checked: ${agreement}`)
//   }

//   return(
//     <>
//      <form onSubmit={handleSubmit}>
//       <label>
//         <input type="checkbox" onChange={handleChange}/>
//         Label 1
//         <button>Submit</button>
//       </label>
//      </form>
//     </>
//   )
// }

// example 24 => checkbox class components
// class Example extends React.Component{

//   constructor(props){
//     super(props)
//     this.state = {
//       agreement:false
//     }
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(`checked:  ${this.state.agreement}`)
//   }

//   handleChange = (e) =>{
//     this.setState({
//       agreement:e.target.checked
//     })
//   }

//   render(){
//     return(
//       <> 
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             <input type="checkbox" checked={this.state.agreement} onChange={this.handleChange}/>
//           </label>
//         <button type="submit">Submit</button>
//         </form>
//       </>
//     )
//   }
// }

// example 23 => async image loading 
// function Example(){
//     return(
//         <>
//             <AsyncImage src="https://dirask.com/static/bucket/1574890428058-BZOQxN2D3p--image.png"/>
//             <AsyncImage src="https://img.freepik.com/free-photo/blossom-floral-bouquet-decoration-colorful-beautiful-flowers-background-garden-flowers-plant-pattern-wallpapers-greeting-cards-postcards-design-wedding-invites_90220-1103.jpg"/>
//             <AsyncImage src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg"/>
            
//         </>
//     )
// }
// const AsyncImage = (props) => {
//     const [loadedSrc, setLoadedSrc] = useState(null);

//     useEffect(() => {
//         setLoadedSrc(null);
//         if (props.src) {
//             const handleLoad = () => {
//               setLoadedSrc(props.src);
//           };
//           const image = new Image();
//           image.addEventListener('load', handleLoad);
//             image.src = props.src;
//           return () => {
//                 image.removeEventListener('load', handleLoad);
//           };
//       }
//   }, [props.src]);
//     if (loadedSrc === props.src) {
//       return (
//           <img {...props} />
//       );
//   }
//     return null;
// };

// example 22 => pure component
// class Example extends React.PureComponent{
//     render(){
//         const {points=0} = this.props;
//         return(
//             <>
//              <span>{points}</span>
//             </>
//         )
//     }
// }

// example 21 => array as state 
// function Example(){
//     const [list,setList] = useState(['one','two','three']);

//     // const handleAddClick = () => {
//     //     const num = list.length + 1
//     //     setList([...list,'added-'+num])
//     // }

//     const btnDel = (index) => {
//         list.splice(index,1)
//         setList([...list])
//     }

//     // const handleDelClick =()=> {
//     //     setList(list.filter((item) => item !== 'two'))
//     // }

//     const handleDelClick =()=> {
//         setList(list.map((item,index) => item === 'two' ? 'new-two-value' : item))
//     }

//     return(
//         <>
//          {list.map((val,index) => {
//             return(
//                 <div key={index}>
//                     {val}
//                     <button onClick={() => btnDel(index)}>&times;</button>
//                 </div>
//             )
//          })}
//          {/* <button onClick={handleAddClick}>Add</button> */}
//          <button onClick={handleDelClick}>Delete items</button>
//         </>
//     )
// }
// // example 20 => animation with transition property
// function Example(){
//     const myComponentNormal = {
//         width: '120px',
//         height: '120px',
//         background: 'goldenrod',
//         transition: '0.5s'
//     }
    
//     const myComponentBig = {
//         width: '200px',
//         height: '200px',
//         background: 'yellowgreen',
//         transition: '0.5s'
//     }

//     const [bigSize, setBigSize] = React.useState(false);
//   	const handleClick = () => setBigSize(!bigSize);
//     return(
//         <>
//         <div style={{height: '220px'}}>
//             <div style={bigSize ? myComponentBig : myComponentNormal} >
//             <button onClick={handleClick}>Change size</button>
//             </div>
//         </div>
//         </>
//     )
// }


// example 19 
// function Example(){
//     const [progress,setProgress] = useState(25);
//     return(
//         <>
//             <ProgressBar progress={progress}/>
//             <br/>
//             <div>
//                 <button className={progress === 0 ? 'btn btn-success' : 'btn btn-primary'} onClick={() => setProgress(0)}>0%</button>
//                 <button className={progress === 5 ? 'btn btn-success' : 'btn btn-primary'} onClick={() => setProgress(5)}>5%</button>
//                 <button className={progress === 15 ? 'btn btn-success' : 'btn btn-primary'} onClick={() => setProgress(15)}>15%</button>
//                 <button className={progress === 25 ? 'btn btn-success' : 'btn btn-primary'} onClick={() => setProgress(25)}>25%</button>
//                 <button className={progress === 50 ? 'btn btn-success' : 'btn btn-primary'} onClick={() => setProgress(50)}>50%</button>
//                 <button className={progress === 75 ? 'btn btn-success' : 'btn btn-primary'} onClick={() => setProgress(75)}>75%</button>
//                 <button className={progress === 100 ? 'btn btn-success' : 'btn btn-primary'} onClick={() => setProgress(100)}>100%</button>
//             </div>
//         </>
//     )
// }

// const ContainerStyle = {
//     border: '1px solid silver',
//   	background: '#c5c5c5'
// }

// const ContentStyle = {
//     background: '#00cc00',
//   	height: '24px',
//   	textAlign: 'center',
//   	lineHeight: '24px',
//   	fontFamily: 'sans-serif',
//   	transition: '0.3s'
// }

// const ProgressBar = ({progress}) => {
//     const state = `${progress}%`;
//     return(
//         <div style={{...ContainerStyle}}>
//             <div style={{...ContentStyle,width:state}}>
//                 {progress > 5 ? state : ''}
//             </div>
//         </div>
//     )
// }

// example 18
// function Example(){
//     const DivScroll = {
//     width:'100px',
//     height:'100px',
//     overflowX:'scroll',
//     overflowY: 'hidden',
// }

    
//     return(
//         <>
//         <div style={{height:'200px'}}>
//             <div style={DivScroll}>
//                 In officia nulla irure eu mollit veniam est exercitation est tempor. Amet elit id magna esse laboris sit qui elit. Et cupidatat sint eiusmod aliqua velit pariatur dolor esse qui. Minim quis ipsum minim laborum amet ex magna consectetur laboris.  In officia nulla irure eu mollit veniam est exercitation est tempor. Amet elit id magna esse laboris sit qui elit. Et cupidatat sint eiusmod aliqua velit pariatur dolor esse qui. Minim quis ipsum minim laborum amet ex magna consectetur laboris.
//             </div>
//          </div>
//         </>
//     )
// }


// // example 17
// function Example(){
    // const DivScroll = {
//     width:'100px',
//     height:'100px',
//     overflowY: 'scroll'
// }

    
//     return(
//         <>
//         <div style={{height:'100px'}}>
//             <div style={DivScroll}>
//                 In officia nulla irure eu mollit veniam est exercitation est tempor. Amet elit id magna esse laboris sit qui elit. Et cupidatat sint eiusmod aliqua velit pariatur dolor esse qui. Minim quis ipsum minim laborum amet ex magna consectetur laboris.  In officia nulla irure eu mollit veniam est exercitation est tempor. Amet elit id magna esse laboris sit qui elit. Et cupidatat sint eiusmod aliqua velit pariatur dolor esse qui. Minim quis ipsum minim laborum amet ex magna consectetur laboris.
//             </div>
//          </div>
//         </>
//     )
// }

// example 16 
// class Example extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             color:'yellow'
//         }
//         this.btnToggle = this.btnToggle.bind(this)
//     }

//     btnToggle = () => {
//         this.setState({color:this.state.color === 'yellow' ? 'orange' : 'yellow'})
//     }
//     render(){
//         return(
//             <>
//             <p onClick={this.btnToggle} style={{backgroundColor:this.state.color}}>This is paragraph.</p>
//             </>
//         )
//     }
// }

// example 15 
// function Example(){
//     const [color, setColor] = useState('yellow');

//     const btnClick  =() => {
//         setColor(color === 'yellow' ? 'orange' : 'yellow')
//     }

//     return(
//         <>
//          <p onClick={btnClick} style={{backgroundColor:color}}>nitesh khatri</p>
//         </>
//     )
// }

// example 14 
// const style1 = {
//     color:'orange'
// }
// const style2 = {
//     color:'red'
// }
// const style3 = {
//     color:'green'
// }
// const MyComponent = (props) => {
//     const CustomTag = `h${props.priority}`

//     return(
//         <>
//          <CustomTag style={props.style}>priority = ${props.priority}</CustomTag>
//         </>
//     )
// }
// function Example(){
//     return(
//         <>
//             <MyComponent style={style1} priority="1"/>
//             <MyComponent style={style2} priority="2"/>
//             <MyComponent style={style3} priority="3"/>
//         </>
//     )
// }

// example 13 
// function Example(){
//     const [list,setList] = useState([]);

//     const btnDel = () => {
//         const items = list;
//         if (items.length > 0) {
//             const lastIndex = items.length - 1;
//             setList(items.filter((item, index) => index !== lastIndex));
//         }
//     }

//     const btnAdd = () => {
//         const newItems = list;
//         setList([...list,`item-${newItems.length}`])
//     }

//     return(
//         <>
//             List: {list.length} total items.
//             <button onClick={btnAdd}>+</button>
//             <button onClick={btnDel}>-</button>
//             <ul>
//                 {list.map((val,index) => {
//                     return(
//                         <li key={index}>
//                             {val}
//                         </li>
//                     )
//                 })}
//             </ul>
//         </>
//     )
// }

// example 12
// class Example extends React.Component{

//     constructor(props){
//         super(props);
//         this.state = {
//             items:[]
//         }
//     }

//     handleAddItem = () => {
//         const items = this.state.items;
//         this.setState({ items: [...items, 'item-' + items.length] });
//       };
    
//       handleRemoveItem = () => {
//         const items = this.state.items;
//         if(items.length > 0){
//             const lastIndex = items.length - 1;
//             this.setState({items:items.filter((item,index) => index !== lastIndex)})
//         }
//       };


//     render(){
//         const items = this.state.items;
//         return(
//             <>
//              <div>List : {items.length} total items.</div>
//              <button onClick={this.handleAddItem}>+</button>
//              <button onClick={this.handleRemoveItem}>-</button>
//              <ul>
//                 {items.map((item,index) => {
//                     return(
//                         <>
//                          <li key={index}>{item}</li>
//                         </>
//                     )
//                 })}
//              </ul>
//             </>
//         )
//     }
// }


// example 11 
// function Example(){
//     return(
//         <>
//         <FunctionOne data="who needs me"/>
//         </>
//     )
// }

// function FunctionOne({data}){
//     return(
//         <>
//          One component 
//          <hr/>
//          <FunctionTwo data={data}/>
//         </>
//     )
// }
// function FunctionTwo({data}){
//     return(
//         <>
//          Two component 
//          <hr/>
//          <ComponentCombined data={data}/>
//         </>
//     )
// }
// function ComponentCombined({data}){
//     return(
//         <>
//          <h2>{data}</h2>
//         </>
//     )
// }

// example 10
// function Example(){
//     return(
//         <>
//          <FirstComponent content="Who needs me"/>
//         </>
//     )
// }
// function FirstComponent({content}){
//     return(
//         <>
//          <h3>I am the first component</h3>
//          <SecondComponent content={content}/>
//         </>
//     )
// }
// function SecondComponent({content}){
//     return(
//         <>
//         <h3>I am the second component</h3>
//          <ThirdComponent content={content}/>
//         </>
//     )
// }
// function ThirdComponent({content}){
//     return(
//         <>
//          <h3>I am the third component</h3>
//          <ComponentNeedingProps content={content}/>
//         </>
//     )
// }
// function ComponentNeedingProps({content}){
//     return(
//         <>
//          <h2>{content}</h2>
//         </>
//     )
// }

// example 9 
// let context = createContext();
// function Example(){

//   const [fname,setFname] = useState('nitesh');
//   const [lname,setLname] = useState('khatri');


//   return(
//     <context.Provider value={{fname,lname}}>
//       <ChildA/>
//     </context.Provider>
//   )
// }
// function ChildA(){
//   return(
//     <>
//      <h3>Child A</h3>
//      <p>
//       Duis esse mollit mollit ex consectetur amet adipisicing esse in fugiat esse. Amet ex nostrud sit ad. Magna ex reprehenderit quis pariatur amet ea nisi nisi deserunt amet non deserunt. Ipsum velit sit labore voluptate culpa velit officia pariatur. Nostrud laborum proident tempor culpa elit commodo occaecat do sit. Fugiat et enim laborum nostrud cillum occaecat occaecat deserunt ad voluptate do aliqua.
//      </p>
//      <hr/>
//      <ChildB/>
//     </>
//   )
// }
// function ChildB(){
//   const {fname,lname} = useContext(context)
//   return(
//     <>
//      <h3>Fullname: {fname} - {lname}</h3>
//     </>
//   )
// }
// let context = createContext();
// function Example(){
//     const [fname,setFname] = useState('nitesh')
//     const [lname,setLname] = useState('khatri')


//     return(
//         <>
//          <context.Provider value={{fname,lname}}>
//             <ChildA/>
//          </context.Provider>
//         </>
//     )
// }

// function ChildA(){
//     return(
//         <>Child A   <ChildB/></>
//     )
// }

// function ChildB(){
//     return(
//         <>Child B {" "}
//           <ChildC/>
//         </>
//     )
// }
// function ChildC(){
//     const {fname,lname} = useContext(context); 
//     return(
//         <>
//          {fname} {lname}
//         </>
//     )
// }


// example 8 
// function Example(){
//     const [data,setData] = useState("some state");
//     return(
//         <>
//            <ParentComp>
//             <ComponentOne>
//                 <ComponentTwo data={data}/>
//             </ComponentOne>
//            </ParentComp>
//         </>
//     )
// }
// function ParentComp({children}) {
//     return(
//         <>
//          <p>This is Parent Component</p>
//          {children}
//         </>
//     )
// }
// function ComponentOne({children}){
//     return(
//         <>
//          <h3>This is Component one</h3>
//          {children}
//         </>
//     )
// }
// function ComponentTwo({data}){
//     return(
//         <>
//          <h3>This is Component two with the received state {data}</h3>
//         </>
//     )
// }




// example 7 
// const userContext = createContext();
// function Example(){
//     return(
//         <>
//         <Navbar/>
//          <userContext.Provider value={{user:'nitesh'}}>
//             <MainPage/>
//          </userContext.Provider>
//         </>
//     )
// }

// function Navbar(){
//     return(
//         <>
//          <nav style={{ background: "#10ADDE", color: "#fff" }}>Demo App</nav>
//         </>
//     )
// }

// function MainPage(){
//     return(
//         <>
//           <h3>Main Page</h3>
//           <Content/>
//         </>
//     )
// }

// function Content(){
//     return(
//         <div>
//             <Message />
//         </div>
//     )
// }
// function Message(){
//     const {user} = useContext(userContext);
//     return(
//         <> 
//         <p>Welcome, {user}</p>
//         </>
//     )
// }

/// example 6 
// function Example(){
    // const AppToaster  = Toaster.create({
    //     position:Position.TOP
    //   })
//     const [users,setUsers] = useState([]);
//     const [newName,setNewName] = useState('');
//     const [newEmail,setNewEmail] = useState('');
//     const [newWebsite,setNewWebsite] = useState('');

//     const addUser = () => {
//         const name = newName.trim();
//         const email = newEmail.trim();
//         const website = newWebsite.trim();

//         if(name && email && website){
//             fetch('https://jsonplaceholder.typicode.com/users',{
//                 method:'POST',
//                 body:JSON.stringify({
//                     name,email,website,
//                 }),
//                 headers:{
//                     "Content-type": "application/json; charset=UTF-8",
//                 },
//             })
//             .then((response) => response.json())
//             .then((data) => {
//                 setUsers([...users,data]);
//                 setNewName('');
//                 setNewEmail('');
//                 setNewWebsite('');
//                 AppToaster.show({
//                     message:'User added successfully',
//                     intent:'success',
//                     timeout:3000,
//                 })
//             })
//         }
//     }

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((json) => setUsers(json));
//     })

//     const onChangeHandler = (id,key,value) => {
//         setUsers((values) => {
//             return values.map((item) => {
//                 item.id === id ? {...item,[key]:value}:item
//             })
//         })
//     }

//     const updateUser = (id) => {
//         const user = users.find((user) => user.id === id);
//         fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
//             method:"PUT",
//             body:JSON.stringify(user),
//             headers:{
//                 "Content-type": "application/json; charset=UTF-8",
//             }
//         })
//         .then((response) => response.json())
//         .then(() => {
//             AppToaster.show({
//                 message: "User updated successfully",
//                 intent: "success",
//                 timeout: 3000,
//               });
//         })
//     }

//     const deleteUser = (id) => {
//         fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
//             method:"DELETE",
//         })
//         .then((response) => response.json())
//         .then(() => {
//             setUsers((values) => {
//                 return values.filter((item) => item.id !== id);
//             })
//             AppToaster.show({
//                 message: "User deleted successfully",
//                 intent: "success",
//                 timeout: 3000,
//             })
//         })
//     }
    
//     return(
//         <>
//          <table class="bp4-html-table .modifier">
//             <thead>
//             <tr>
//                 <th>Id</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Website</th>
//                 <th>Action</th>
//             </tr>
//             </thead>
//             <tbody>
//                 {users.map((user) => {
//                     return(
//                         <tr key={user.id}>
//                             <td>{user.id}</td>
//                             <td>{user.name}</td>
//                             <td>
//                                 <EditableText value={user.email} onChange={(value) => onChangeHandler(user.id,'email',value)}/>
//                             </td>
//                             <td>
//                                 <EditableText value={user.website} onChange={(value) => onChangeHandler(user.id,'website',value)}/>
//                             </td>
//                             <td>
//                             <Button intent="primary" onClick={() => updateUser(user.id)}>
//                                 Update
//                             </Button>
//                             <Button intent="danger" onClick={() => deleteUser(user.id)}>
//                              Delete
//                             </Button>
//                             </td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
//             <tfoot>
//                 <tr>
//                     <td>
//                         <InputGroup value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='add name here....'/>
//                     </td>
//                     <td>
//                         <InputGroup value={newEmail} onChange={(e) => setNewEmail(e.target.value)} placeholder='add email here....'/>
//                     </td>
//                     <td>
//                         <InputGroup value={newWebsite} onChange={(e) => setNewWebsite(e.target.value)} placeholder='add website here....'/>
//                     </td>
//                     <td>
//                         <Button intent="success" onClick={addUser}>Add user</Button>
//                     </td>

//                 </tr>
//             </tfoot>
//         </table>
//         </>
//     )
// }

// example 5 
// function Example(){
//     const url = 'https://jsonplaceholder.typicode.com/posts'
//     const [list,setList] = useState([])
//     const [value,setValue] = useState('')

//     const fetchData = () => {
//         fetch(url)
//         .then((res) => res.json())
//         .then((result) => setList(result))
//     }

//     useEffect(() => {
//         fetchData()
//     },[])

//     const handleDel = (index) => {
//         // list.splice(index,1)
//         // setList([...list])
//         const newTaskList = list;
//         newTaskList.splice(index,1);
//         setList([...newTaskList])
//     }
    
//     const handleChange = (e) => {
//         setValue(e.target.value)
//     }

//     const handleAdd = () => {
//         setList([...list],value)
//     }


//     return(
//         <>
//         <InputField value={value} onHandleChange={handleChange} onAdd={handleAdd}/>
//          {list.map((val,index) => {
//             return(
//                 <Superb key={index} title={val.title} body={val.body} onDel={handleDel}/>
//             )
//          })}
//         </>
//     )
// }

// const InputField = ({title,onHandleChange,onAdd}) => {

//     return(
//         <>
//          <input type="text" value={title} onChange={onHandleChange}/>
//          <button onClick={onAdd}>&#43;</button>
//         </>
//     )
// }
// const Superb = ({title,body,onDel}) => {
//     return(
//         <>
//          <div className='card'>
//             <h3>{title}</h3>
//             <p>{body}</p>
//             <button onClick={() => onDel()}>&times;</button>
//          </div>
//         </>
//     )
// }


// example 4 
// function Example(){
//     return(
//         <>
//          Math Expression:
//          <h2>{3+59*5}</h2>
//         </>
//     )
// }

// example 3
// class Example extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             name:'nitesh',
//             age:34
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(){
//         this.setState({
//             name:'sameet',
//             age:41
//         })
//     }
//     render(){
//         return(
//             <>
//              <h2>{this.state.name}</h2>
//              <h2>{this.state.age}</h2>
//              <button onClick={this.handleChange}>Change text</button>
//             </>
//         )
//     }
// }

// example 2 
// function Example(){
//     const initialState = [1,2,3,4]
//     const [list,setList] = useState(initialState)



//     const handleDel = (index) => {
//         list.splice(index,1);
//         setList([...list])
//     }
//     return(
//         <>
//             <ListCustom list={list} onDel={handleDel}/>   
//         </>
//     )
// }
// const ListCustom = ({list,onDel}) => {
//     return(
//         <>
//          <ul>
//             {list.map((val,index) => {
//                 return(
//                     <li key={index}>
//                         {val}
//                         <button onClick={() => onDel(index)}>&times;</button>
//                     </li>
//                 )
//             })}
//          </ul>
//         </>
//     )
// }

// example 1
// function Example(){

//    const [num1,setNum1] = useState(0);
//    const [num2,setNum2] = useState(0);

//    const add = (a,b) => {
//     return parseInt(a) + parseInt(b)
//    }

//    const cal1 = useMemo(() => {
//     return add(num1,num2)
//    },[num1,num2])

//     function handleClick(){
//         console.log('sameet khatri')
//     }

//     function handleChange(){
//         setNum1(num1 => num1 + 1)
//         setNum2(num1 => num1 + 1)
//     }
//     useEffect(() => {

//     });
//     return(
//         <>
//          <button onClick={function(){ console.log('nitesh khartri'),handleClick}}>Click</button>
//          <input type='text' value={num1} onChange={handleChange} />
//          <input type='text' value={num2} onChange={handleChange} />
//          {cal1}
//         </>
//     )
// }
