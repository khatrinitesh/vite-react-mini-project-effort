import React,{useState} from 'react';
import Banner from '../components/banner';
import Hello from '../components/hello';
import Users from '../components/users';
import Info from '../components/info';
import Posts from '../components/posts';

export default function Home() {

  const [count,setCount] = useState(0);
  const [toggle,setToggle] = useState(true);

  const btnInc = () => {
    setCount(prevCount => prevCount + 1)
  }

  const btnDec = () => {
    setCount(prevCount => prevCount - 1)
  }
  const btnReset = () => {
    setCount(0)
  }
  const btnToggle = () => {
    setToggle(!toggle);
  }

  const handleLogin = () => {
    setToggle(false)
  }
  const handleLogout = () => {
    setToggle(true)
  }

  const result = 'nitesh khatri is homepage'
  return (
    <div className='content'>
      <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum"/>
      <Hello hello={result}/>
      <hr/>
      <br/>
      {count}
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
      <button onClick={btnReset}>Reset</button>
      <br/>
      <hr/>
      <br/>
      <button onClick={btnToggle}>Click toggle</button>
      {toggle ? <Nitesh onClick={handleLogin}/> : <Sameet onClick={handleLogout}/>}
      {Users.map((e) => {
        return(
          <Info key={e} name={e.name} rollNo={e.rollNo}></Info>
        )
      })}
      <Posts/>
    </div>
  )
}

function Nitesh({onClick}){
  return(
    <>
    <h1>Login</h1>
    <label>username</label>
    <br/>
    <label>password</label>
    <button onClick={onClick}>Login</button>
    </>
  )
}
function Sameet({onClick}){
  return(
    <>
    <h1>Dashboard</h1>
    <form>
      <label>Name</label>
      <br/>
      <label>email</label>
      <br/>
      <label>mobile no</label>
    </form>
    <button onClick={onClick}>Logout</button>
    </>
  )
}
