import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {

    const nav = useNavigate();

    const btnNav  =() => {
        nav('/')
    }
  return (
    <div>
      PageNotFound
      <button onClick={btnNav}>Return to homepage</button>
    </div>
  )
}
