import React,{useState,useEffect} from 'react'

export default function FinalFetch() {
    
  return (
    <div>
        <Example/>
    </div>
  )
}

function Example(){

    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [data,setData] = useState([]);

    const FetchData = async () => {
        setLoading(true)
        try{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!res.ok){
                throw new Error('sorry something went wrong')
            }
            const data = await res.json()
            setData(data)
            setLoading(false)
        }
        catch(error){
            setError(error.message)
            setLoading(false)   
        }
    }

    const btnRemove = (id) => {
        const newList = data.filter((val) => val.id !== id)
        setData(newList)
    }

    useEffect(() => {
        FetchData()
    },[])

    if(loading){
        return(
            <div>Loading....</div>
        )
    }
    if(error){
        return(
            <div>{error}</div>
        )
    }
    return(
        <>
         {data.map((val) => {
            return(
                <div key={val.id}>
                    <h3>{val.title}</h3>
                    <p>{val.body}</p>
                    <button onClick={() =>btnRemove(val.id)}>&times;</button>
                </div>
            )
         })}
        </>
    )
}