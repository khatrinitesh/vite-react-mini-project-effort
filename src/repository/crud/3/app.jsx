import React,{useState,useEffect} from 'react'

export default function CustomApp() {

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')
    const [data,setData] = useState([]);

    const fetchData = async () => {
        setLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('sorry something went wrong')
            }
            const data = await response.json();
            setData(data)
            setLoading(false)
        }
        catch(error){
            setError(error.message)
            setLoading(false)
        }
    }

    const btnDel = (id) => {
        const newData = data.filter((val) => val.id !== id)
        setData(newData)
    }

    useEffect(() => {
        fetchData()
    },[])

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    if(error){
        return(
            <div>{error}</div>
        )
    }
  return (
    <div>
      {data.map((val) => {
        return(
            <div key={val.id}>
                <h3>{val.title}</h3>
                <p>{val.body}</p>
                <button onClick={() => btnDel(val.id)}>&times;</button>
            </div>
        )
      })}
    </div>
  )
}
