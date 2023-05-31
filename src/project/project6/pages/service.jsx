import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('')
  const [data,setData] = useState([])

  const fetchData = async () => {
    setLoading(true)
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if(!res.ok){
        throw new Error('sorry something went wrong')
      }
      const data = await res.json()
      setData(data);
      setLoading(false)
    }
    catch(error){
      setError(error.message)
    }
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
    <div className='content'>
      <Banner title="Service" paragraph="Lorem Ipsum"/>
      {data.map((val) => {
        return(
          <div key={val.id}>
            <h3>{val.title}</h3>
            <p>{val.body}</p>
          </div>
        )
      })}
    </div>
  )
}
