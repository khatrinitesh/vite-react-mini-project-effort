import React, { useState } from 'react'
import {Data} from '../assignment38/data';
import { v4 as uuidv4 } from 'uuid';

export default function CustomApp() {
  return (
    <div>
      <ExampleTwo/>
    </div>
  )
}

function Example(){
    const [list,setList] = useState(Data);
    const [name,setName] = useState('')
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = e => {
        const query = e.target.value 
        setSearchQuery(query);
        const searchList = list.filter((item) => {
            return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setList(searchList)
    }

    const handleAdd = e => {
        e.preventDefault();
        const newList = list.concat({name,id: uuidv4() })
        setList(newList)
        setName('')
    }

    const btnDel  = id => {
        const newData = list.filter((val) => val.id !== id)
        setList(newData)
    }
    return(
        <>
         <input type="text" value={searchQuery} onChange={handleSearch}/>
         <button onClick={handleAdd}>Add</button>
         {list.map((val) => {
            return(
                <div key={val.id}>{val.title} {val.name} <button onClick={() => btnDel(val.id)}>&times;</button></div>
            )
         })}
        </>
    )
}


const courses = [
    {
      id: 0,
      name: 'Full Stack Developement Program',
      price: '89,999',
      category: 'Software Development'
    },
    {
      id: 1,
      name: 'Python Automation Testing Program',
      price: '64,999',
      category: 'Testing'
    },
    {
      id: 2,
      name: 'UI/UX Program',
      price: '89,999',
      category: 'design'
    }
  ]

  /* new array of only 'testing' category */
  const testings = courses.filter(course  =>
    course.name !== 'Full Stack Developement Program'
  );

  const arrayItems = testings.map((val) => {
    return(
        <li key={val.id}>
            {val.name} - {val.price} - {val.category}
        </li>
    )
})

function ExampleTwo(){
    return(
        <>
        <ul>{arrayItems}</ul>
        </>
    )
}

