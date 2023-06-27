import React from 'react';
import UserItem from './useritem';

export default function UserList({users,onDelete}) {
  return (
    <div>
      <span>Users list</span>
      <div>
        {users.map((user) => {
            return(
                <UserItem key={user.id} user={user} onDelete={onDelete}/>
            )
        })}
      </div>
    </div>
  )
}
