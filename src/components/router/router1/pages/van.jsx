import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';

export default function Van() {

    const [van,setVan] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setVan(data));
    })
  return (
    <div>
      {van.map((val,index) => {
        return(
            <div key={index}>
                <Link to={`https://jsonplaceholder.typicode.com/posts/${val.id}`}>
                <h3>{val.title}</h3>
                <p>{val.body}</p>
                </Link>
            </div>
        )
      })}
    </div>
  )
}
