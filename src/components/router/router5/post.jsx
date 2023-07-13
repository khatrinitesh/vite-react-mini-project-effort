import React,{ useState,useEffect  }  from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function Post() {

    const { id } = useParams();
    const [post, SetPost] = useState({});
    const push  = useNavigate();

    useEffect(() => {
        const fetch = async () => {
          try {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
            SetPost(data);
          } catch (err) {
            console.error(err);
          }
        };
        fetch();
      }, []);

  return (
    <div>
      <article>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <br />
        <button onClick={() => push("/")}>Go back</button>
        </article>
    </div>
  )
}
