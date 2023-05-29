import React,{useEffect,useState} from 'react';
import axios from 'axios';

export const Posts = () => {
    const [posts,setPosts] = useState([]);

    const getPosts = () => {
        axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then((res) => {
            setPosts(res.data);
            console.log(posts);
        })
        .catch((err) => console.error(err))
    };

    useEffect(() => {
        getPosts()
    },[])

    const btnRemove = (id) => {
        const newData = posts.filter((val) => val.id !== id)
        setPosts(newData)
    }
  return(
    <>
    <ul>
        {posts.map((val) => {
            return(
                <li>
                    {val.title}
                    <button onClick={() => btnRemove(val.id)}>&times;</button>
                </li>
            )
        })}
    </ul>
    </>
  )
}
