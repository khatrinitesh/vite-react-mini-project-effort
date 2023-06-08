import React, { useState } from 'react';
import Banner from '../components/banner';

export default function Home() {

  const [obj,setObj] = useState({
    fname:'nitesh',
    lname:'khatri',
    age:34,
    jobtitle:'fe developer',
    address:{
      line1:'test1',
      line2:'test2'
    },
    friends:{
      f1:'vijay',
      f2:'vishal',
      f3:'ronak'
    }
  });
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

  function handleChangeTwo(e){
    e.preventDefault();
    setObj({...obj,fname:'sameet',lname:'shah',address:{...obj.address,line1:'test3',line2:'test4'}})
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

        <h1>{obj.fname} {obj.lname}</h1>
        <hr/>
        <h1>{obj.address.line1}</h1>
        <h3>{...obj.address.line2}</h3>
        <hr/>
        <h4>{...obj.friends.f1}</h4>
        <h4>{...obj.friends.f2}</h4>
        <h4>{...obj.friends.f3}</h4>
        <button onClick={handleChangeTwo}>Change</button>
    </div>
  )
}
