import React,{useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.css";

export default function AddArrayElementExmple() {
  return (
    <>
      <Example/>
    </>
  )
}

const initialList = [
  {
    id:1,name:'nitesh',age:34
  },
  {
    id:2,name:'urvashi',age:64
  },
  {
    id:3,name:'arvind',age:68
  },
  {
    id:4,name:'sameet',age:41
  },
]


function Example(){
  const [list,setList] = useState(initialList);
  const [name,setName] = useState('');
  const [age,setAge] = useState('');

  const btnChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const btnAdd = () => {
    const newList = list.concat({name,age,id:uuidv4()})
    setList(newList)
    setName('');
    setAge('');
  }

  const btnDel = (id) => {
    const newList = list.filter((val) => val.id !== id)
    setList(newList)
  }

  return(
    <>
     <AddItem handleAdd={btnAdd} handleChange={btnChange}/>
     <List onDel={btnDel} list={list} />
    </>
  )
}

const AddItem = ({name,handleChange,handleAdd}) => {
  return(
    <>
      <input type="text" value={name} onChange={handleChange}/>
      <button onClick={handleAdd}>Add</button>
    </>
  )
}
const List = ({onDel,list})  => {
  return(
    <>
     {list.map((val) => {
      return(
        <li key={val.id}>
          <h3>{val.name}</h3>
          <button onClick={() => onDel(val.id)}>&times;</button>
        </li>
      )
     })}
    </>
  )
}



// const person = [
//   {
//     id:1,name:'nitesh'
//   },
//   {
//     id:2,name:'urvashi'
//   },
//   {
//     id:3,name:'arvind'
//   },
//   {
//     id:4,name:'sameet'
//   },
// ]


// function Example(){

//   const [list,setList] = useState(person)
//   const [name,setName] = useState('');

//   const btnChange =(e)=>{
//     setName(e.target.value)
//   }

//   const btnAdd = () => {
//     const newList = list.concat({name,id:uuidv4()})
//     setList(newList)
//     setName('');
//   }

//   const btnDel= (id) => {
//     const newList = list.filter((val) => val.id !== id)
//     setList(newList)
//   }

//   return(
//     <>
//      <AddItem name={name} handleChange={btnChange} handleAdd={btnAdd}/>
//      <List list={list} onDel={btnDel}/>
//     </>
//   )
// }

// const AddItem = ({name,handleChange,handleAdd}) => {
//   return(
//     <>
//      <input type="text" value={name} onChange={handleChange}/>
//      <button onClick={handleAdd}>Add</button>
//     </>
//   )
// }
// const List = ({list,onDel}) => {
//   return(
//     <ul>
//      {list.map((val) => {
//       return(
//         <li key={val.id}>
//           {val.name}
//           <button onClick={() => onDel(val.id)}>&times;</button>
//         </li>
//       )
//      })}
//     </ul>
//   )
// }

// const initialList = [
//   {
//     id: 'a',
//     name: 'Robin',
//   },
//   {
//     id: 'b',
//     name: 'Dennis',
//   },
// ];

// function Example(){
//   const [list, setList] = React.useState(initialList);
//   const [name, setName] = React.useState('');

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleAdd() {
//     const newList = list.concat({ name, id: uuidv4() });
//     setList(newList);
//     setName('');
//   }

//   function handleDel(id){
//     const newList = list.filter((val) => val.id !== id)
//     setList(newList)
//   }

//   return(
//     <>
//       <AddItem
//         name={name}
//         onChange={handleChange}
//         onAdd={handleAdd}
//       />
//     <List list={list} onDel={handleDel} />
//     </>
//   )
// }

// const AddItem = ({ name, onChange, onAdd }) => (
//   <div>
//     Search:
//     <br/>
//     <input type="text" value={name} onChange={onChange} />
//     <button type="button" onClick={onAdd}>
//       Add
//     </button>
//   </div>
// );

// const List = ({ list,onDel }) => {
//   return(
//   <table>
//     <tr>
//       <th>
//         id
//       </th>
//       <th>
//         Name
//       </th>
//     </tr>
//     <tr>
//       <td>
//       {list.map((item) => (
//         <div key={item.id}>{item.name} <button onClick={() => onDel(item.id)}>&times;</button></div>
//       ))}
//       </td>
//     </tr>
//   </table>
//   )
// };

// updating array in state 
// function Example(){

//   const person = [
//     {
//       id:1,name:'nitesh'
//     },
//     {
//       id:2,name:'sameet'
//     },
//     {
//       id:3,name:'mom'
//     },
//     {
//       id:4,name:'daddy'
//     },
//   ]
//   const [name,setName] = useState('')
//   const [artists,setArtists] = useState(person);

//   let nextId = 0;

//   function handleChange(e){
//     e.preventDefault();
//     setName(e.target.value)
//   }
//   return(
//     <>
//      <h1>Inspiring sculptors:</h1>
//      <input type="text" value={name} onChange={handleChange}/>
//       <button onClick={() => {artists.push({id:nextId++,name:name})}}>Add</button>
//       <ul>
//         {artists.map((val) => {
//           return(
//             <li key={val.id}>
//               {val.name}
//             </li>
//           )
//         })}
//       </ul>
//     </>
//   )
// }

// const initialList = [
//     {
//       id: 'a',
//       name: 'Robin',
//     },
//     {
//       id: 'b',
//       name: 'Dennis',
//     },
//   ];

// const url = 'https://jsonplaceholder.typicode.com/posts'


// function Example(){
//     const [list, setList] = useState(initialList);
//     const [name,setName] = useState('');

//     function handleChange(e){
//         setName(e.target.value);
//     }

//     function handleAdd(){
//         const newList = list.concat({name,id: uuidv4()});
//         setList(newList);
//         setName('');
//     }
//     function btnRemove(id){
//         const newList = list.filter((val) => val.id !== id)
//         setList(newList)
//     }

//     return(
//         <>
//         <div>
//             <input type="text" value={name} onChange={handleChange} />
//             <button type="button" onClick={handleAdd}>Add</button>
//         </div>
//          <ul>
//             {list.map((val) => {
//                 return(
//                     <li key={val.id}>{val.name} <button onClick={() => btnRemove(val.id)}>&times;</button></li>
//                 )
//             })}
//          </ul>

//         </>
//     )
// }