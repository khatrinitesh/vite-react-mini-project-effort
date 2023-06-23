import axios from 'axios'
import React,{useState,useEffect} from 'react'

export default function CustomApp() {

    const [data,setData] = useState([])

    useEffect(() => {
        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => {
                const result = data.sort((a,b) => a.title.localeCompare(b.title))
                setData(result)
            })
        }

        fetchData()
    },[])
  return (
    <div>
        <h1>Welcome</h1>
        {data && data.length > 0 ? data.map((val) => {
            return(
                <div>{val.title}</div>
            )
        }) :' There is no some data'}
    </div>
  )
}
