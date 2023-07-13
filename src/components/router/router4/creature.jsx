import React, { useState ,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Creature() {

  const [posts,setPosts] = useState([]);

  const fetchDetails = async () => {
    try {
      const result = await axios.get('https://acnhapi.com/v1a/sea/');
      setPosts(result.data);
    } catch (err) {
      console.error(err);
    }
  }

  const btnDel = (id) => {
    const newData = posts.filter((val) => val.id !== id)
    setPosts(newData)
  }
  useEffect(() => {
    fetchDetails()
  },[])
  return (
    <div>
      Creature
      <h3>Creature Detail </h3>
        {posts.map((creature) => {
          return(
            <div key={creature.id}>
               <Link to={`/creature/${creature.id}`}>
                <h3>{creature.name['name-USen']}</h3>
              </Link>
              <button onClick={() => btnDel(creature.id)}>&times;</button>
            </div>
          )
        })}
    </div>
  )
}
