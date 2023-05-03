import React,{useEffect,useState} from 'react'

export default function CallingRestAPIExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){

    const [table,setTable] = useState([]);

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setTable(data));
    }

    useEffect(() => {
        fetchData()
    },[])
    return(
        <>
            <h2>Employees Data...</h2>
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>UserId</th>
                    <th>Title</th>
                    <th>Body</th>
                    </tr>
                </thead>
                <tbody>    
                    {table.map((val) => {
                        const {id,title,body,userId} = val;
                        return(
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{userId}</td>
                                <td>{title}</td>
                                <td>{body}</td>
                            </tr>
                        )
                    })}  
                </tbody>
            </table>
        </>
    )
}