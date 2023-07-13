import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetch = async () => {
          try {
            const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(data);
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, []);
  return (
    <div>
       {posts.map((el) => (
        <article key={el.id}>
          <Link to={`/post/${el.id}`}>
            <h1>{el.title}</h1>
          </Link>
          <p>{el.body}</p>
        </article>
      ))}
    </div>
  )
}
