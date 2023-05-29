import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  let navigate = useNavigate('/index');
  return (
    <div>
      Login
      <button onClick={()=> navigate("/")}>Redirect</button>
    </div>
  )
}
