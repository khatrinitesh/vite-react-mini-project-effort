import React from 'react';
import { Link, Outlet } from 'react-router-dom'

export default function List() {
  return (
    <div>
      <div className='List'>
            <h2>You are inside the List Component</h2>
            <h4>URL: localhost:3000/courses/list</h4>
        </div>
    </div>
  )
}
