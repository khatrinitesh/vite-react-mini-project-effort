import React,{useEffect,useState} from 'react'
import axios from 'axios';

export default function CustomApp() {


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => console.log(response))
    },[])
  return (
    <div>
    </div>
  )
}
