import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

function Example(){
    const data = ["Banana", "Orange", "Apple", "Mango"];
    const [sortState,setSortState] = useState('none');

    const [user,setUser] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        setUser(data);
    }

    useEffect(() => {
        fetchData()
    },[])

    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: undefined },
        descending: { method: (a, b) => (a > b ? -1 : 1) },
      };

    return(
        <>
        <select defaultValue={'default'} onChange={(e) => setSortState(e.target.value)}>
            <option value="default" disabled>None</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
        </select>
        {/* <ul>
            {data.sort(sortMethods[sortState].method).map((val,i) => {
                return(
                    <li key={i}>{val}</li>
                )
            })}
        </ul> */}
            <ul>
            {user.sort(sortMethods[sortState].method).map((val) => {
                return(
                    <li key={val.id}>
                        <h3>{val.title}</h3>
                    </li>
                )
            })}
            </ul>
        </>
    )
}