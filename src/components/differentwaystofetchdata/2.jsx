import React,{useEffect,useState} from 'react';


export default function CustomApp() {


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => console.log(data))
    },[])
  return (
    <div>
    </div>
  )
}
