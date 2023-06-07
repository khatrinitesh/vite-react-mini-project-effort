import React, { useState } from 'react';
import Banner from '../components/banner';

export default function Home() {

  const [name,setName] = useState('');

  const [waitingList,setWaitinglist] = useState([]);

  const handleChange= (e) => {
    e.preventDefault();
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setWaitinglist([...waitingList,name])
  }

  const btnDel = (index) => {
    waitingList.splice(index,1)
    setWaitinglist([...waitingList])
  }


  return (
    <div className='content'>
        <Banner bannertitle="Home" bannerdesc="Lorem Ipsum"/>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" value={name} name="name" onChange={handleChange}/>
          <button>Submit</button>
        </form>
        <ol>
          {waitingList.map((name,index) => {
            return(
              <li key={index}>{name} <button onClick={() => btnDel(index)}>&times;</button></li>
            )
          })}
        </ol>
    </div>
  )
}
