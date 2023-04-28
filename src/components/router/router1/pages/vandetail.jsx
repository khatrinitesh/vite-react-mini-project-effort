import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'

export default function VanDetail() {

    const params = useParams();
    console.log(params)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(response => response.json())
        .then(data => console.log(data));
    },[params,id])

  return (
    <div>
      VanDetail
    </div>
  )
}
