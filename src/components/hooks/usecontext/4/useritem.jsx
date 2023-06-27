import React from 'react'

export default function UserItem({user,onDelete}) {
  return (
    <div>
      <div>{user.name}</div>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  )
}
