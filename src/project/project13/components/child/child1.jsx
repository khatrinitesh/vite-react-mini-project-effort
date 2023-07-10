import { cssNumber } from 'jquery';
import React,{useState,useEffect} from 'react';

export default function ChildOne() {
    
    const [loading,setLoading] = useState(false);
    const [users,setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const url = 'https://jsonplaceholder.typicode.com/users';

    const fetchData = () => {
        try{
            fetch(url)
            .then((response) => response.json())
            .then((data) => setUsers(data));
        }
        catch(error){
            console.log(error)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    },[])
    const btnDel = (id) => {
        const newData = users.filter((val) => val.id !== id)
        setUsers(newData)
    }
  return (
    <div className='row'>
        <input
        type="text"
        placeholder="enter search term ....."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
        {users.filter((val) => {
            if(searchTerm === ""){
                return val;
            }else if(
                val.username.toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            )  
            {
                return val;
            }
        }).map((val) => {
            const {id,username,name,address:{city,zipcode,suite,street}} = val;
            return(
                <div className='col-3 mb-3'>
                    <div className='card p-3' key={id}>
                        <h3>{username}</h3>
                        <p>{name}</p>
                        <p>{city}</p>
                        <p>{street}</p>
                        <p>{zipcode}</p>
                        <p>{suite}</p>
                        <button onClick={() => btnDel(id)}>&times;</button>
                    </div>
                </div>
            )
        })}
        </div>
  )
}
