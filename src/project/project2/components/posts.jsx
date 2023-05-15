import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Posts() {

    const [posts, setPosts] = useState( [] );
 
    useEffect(() => {
      const axiosPosts = async () => {
        const response = await axios('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      };
      axiosPosts();
    }, []);

    const btnRemove = (id) => {
        const newData = posts.filter((val) => val.id !== id)
        setPosts(newData)
    }
  
  const useaxiosPosts = posts.map((post)=>{
    return (
        <div>
                <h3>{post.id}</h3>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
                <button onClick={() => btnRemove(post.id)}>&times;</button>
              </div> 
    )
    })

  return (
      <>
      <h1>Axios With UseState and UseEffect</h1>
      <h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
      <div className="axioscontainer">
          {posts && useaxiosPosts}
      </div>
    </>
  )
}
