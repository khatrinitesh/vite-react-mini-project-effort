import React,{useState} from 'react'

export default function CustomApp() {

    const [message,setMessage] = useState('Welcome to react world');
  return (
    <div>
      {message}
    </div>
  )
}
