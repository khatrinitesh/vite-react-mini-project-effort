import React,{useState,useEffect} from 'react'

// BELOW LIBRARY 
import 'semantic-ui-css/semantic.min.css'
import "bootstrap/dist/css/bootstrap.css";

export default function ActiveClassExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){

    const [list, setList] = useState([])
    const [active, setActive] = useState(null)

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setList(data))
        .catch((e) => console.log(e));
    }

    useEffect(() => {
        fetchData()
    },[])

    return(
        <>
        <h2 className="mb-3">React Js Active Class on List Item Example</h2>
        <ul className="list-group">
            {list.map((item) => {
                return(
                    <li key={item.id} onClick={() => setActive(item)} className={`list-group-item ${active == item && 'active'}`}>
                        {item.name}
                    </li>
                )
            })}
        </ul>
        </>
    )
}
