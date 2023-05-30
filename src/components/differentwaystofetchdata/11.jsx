import React,{useState,useEffect} from 'react'
import axios from 'axios';

export default function FetchData() {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err))
    })
  return (
    <div>
      {users && users.map((val) => <div>{val.title}</div>)}
    </div>
  )
}
