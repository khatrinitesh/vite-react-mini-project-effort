import React, { useState } from 'react';
import UserList from './userlist';

export default function User() {

    const initialObject = [
        {id:1,name:'nitesh'},
        {id:2,name:'vijay'},
        {id:3,name:'ronak'},
        {id:4,name:'hitesh'},
    ]

    const [users,setUsers] = useState(initialObject);
    const deleteUser= (id) => {
        const newList = users.filter((val) => val.id !== id)
        setUsers(newList)
    }
  return (
    <div>
        <UserList users={users} onDelete={deleteUser}/>
    </div>
  )
}
