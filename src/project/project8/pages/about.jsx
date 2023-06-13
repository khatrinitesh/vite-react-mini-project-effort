import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function About() {

  const [data,setData] = useState([])

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((data) => setData(data))
  }

  // useEffect(() => {
  //   fetchData()
  // },[])
  
  const btnDel =(index) => {
    data.splice(index,1)
    setData([...data])
  }

  return (
    <div className='content'>
        <Banner title="About" desc="Lorem Ipsum"/>
        <button onClick={fetchData}>Click</button>
        {data.map((val,index) => {
          return(
            <div key={index}>
              <h3>{val.title}</h3>
              <p>{val.body}</p>
              <button onClick={()=>btnDel(val.id)}>&times;</button>
            </div>
          )
        })}
    </div>
  )
}
