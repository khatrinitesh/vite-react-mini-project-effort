import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function CreateDetails() {

    const [creature,setCreature] = useState({name:{}});

    const {id} = useParams();
    console.log(id);

    const fetchDetails = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())
        .then((data) => setCreature(data));
    }

    useEffect(() => {
        fetchDetails();
    },[])
  return (
    <div>
      <h1>Creatures Details</h1>
      {creature.map((creature) => {
        return(
            <h2 key={creature.id}>
                <Link to={`/creatures/${creature.id}`}>{creature.title}</Link>
            </h2>
        )
      })}
    </div>
  )
}
