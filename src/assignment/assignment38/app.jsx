import React,{useState} from 'react'
import { Data } from './data';

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

  function Example(){

    const [list, setList] = useState(Data);
    const [title,setTitle] = useState('');

    const handleChange= e => {
        setTitle(e.target.value)
    }
    
    const handleAdd= e =>{
        const newAdd = list.concat({title});
        setList(newAdd)
    }

    const btnDel = id => {
        const newList = list.filter((val) => val.id !== id)
        setList(newList)
    }
    return(
        <>
        <input type="text" value={title} onChange={handleChange}/>
        <button onClick={handleAdd}>Add</button>
         <ul>
            <li>
                {list.map((item) => {
                    return(
                        <li key={item.id}>
                            <h3>{item.title}</h3>
                            <button onClick={() => btnDel(item.id)}>&times;</button>
                        </li>
                    )
                })}
            </li>
         </ul>
        </>
    )
  }


