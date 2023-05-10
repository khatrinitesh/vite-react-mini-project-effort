import React,{useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function AddArrayElementExmple() {
  return (
    <>
      <Example/>
    </>
  )
}

const initialList = [
    {
      id: 'a',
      name: 'Robin',
    },
    {
      id: 'b',
      name: 'Dennis',
    },
  ];

// const url = 'https://jsonplaceholder.typicode.com/posts'


function Example(){
    const [list, setList] = useState(initialList);
    const [name,setName] = useState('');

   

    function handleChange(e){
        setName(e.target.value);
    }

    function handleAdd(){
        const newList = list.concat({name,id: uuidv4()});
        setList(newList);
        setName('');
    }
    function btnRemove(id){
        const newList = list.filter((val) => val.id !== id)
        setList(newList)
    }

    return(
        <>
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
         <ul>
            {list.map((val) => {
                return(
                    <li key={val.id}>{val.name} <button onClick={() => btnRemove(val.id)}>&times;</button></li>
                )
            })}
         </ul>

        </>
    )
}