import React from 'react';

export default function Item({title,body,btnRemove}) {
  return (
    <div className='card'>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={btnRemove}>&times;</button>
    </div>
  )
}
