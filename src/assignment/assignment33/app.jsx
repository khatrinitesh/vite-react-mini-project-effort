import React, { useEffect, useState } from 'react'

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

function Example(){

    const [posts,setPosts] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setPosts(data)
    }

    useEffect(() => {
        fetchData()
    },[])


    return(
        <>
         {posts.map((val) => {
            return(
                <div key={val.id}>
                    <h3>{val.title}</h3>
                </div>
            )
         })}
        </>
    )
}