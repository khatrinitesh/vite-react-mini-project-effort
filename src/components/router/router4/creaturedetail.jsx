import React, { useState ,useEffect } from 'react'
import { useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function CreatureDetail() {
  const [post, SetPost] = useState({name:{}});
  const params = useParams();
  const push  = useNavigate();

  const fetchDetails = async () => {
    try {
      const result = await axios.get(`https://acnhapi.com/v1a/sea/${params}`);
      SetPost(result);
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchDetails()
  },[])
  
  return (
    <div>
      <article>
        <h3>{post.name}</h3>
        <button onClick={() => push("/creature")}>Go back</button>
      </article>
    </div>
  )
}
