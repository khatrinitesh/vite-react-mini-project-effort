import React, { useState, useEffect } from 'react';

export default function CustomApp() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setPosts(data);
        })
        .catch((err)=>{
            console.log(err.message)
        })
    })
  return (
    <div>
      {posts.map((val) => {
        return(
            <div key={val.id}>
                {val.title}
            </div>
        )
      })}
    </div>
  )
}
