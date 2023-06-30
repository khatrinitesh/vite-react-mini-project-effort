import React,{useEffect,useState} from 'react'

export default function CustomApp() {
    const [users, setUsers] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const styleDiv = {
        color:'red',
        border: '5px solid pink'
    }
    // Function to collect data
    const getApiData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        // update the state
        setUsers(response);
        setLoading(false);
    }

    function handleRemove(id) {
        const newList = users.filter((item) => item.id !== id);
        setUsers(newList);
      }

    useEffect(() => {
        getApiData()
    },[])

    if(error){
        return(
            <div>{error}</div>
        )
    }
  return (
    <div>
      {users && users.length > 0 ?
      users.map((user) => {
        return(
            <div className='item_container'>
                ID: {user.id} <br/>
                Title: {user.title}
                <button style={styleDiv} onClick={() => handleRemove(user.id)}>&times;</button>
            </div>
        )
      }) : ('no data')}
    </div>
  )
}
