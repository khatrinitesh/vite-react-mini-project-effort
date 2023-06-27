import React,{useContext} from 'react'
import { SnakeContext } from './context'

export default function app() {
    const snake = {
        name:"nitesh khatri",
        fangs:"happy keep smiling is the mantra",
        speed:111,
        color:'orange'
    }
  return (
    <SnakeContext.Provider value={snake}>
      <Header/>
      <Main/>
    </SnakeContext.Provider>
  )
}

function Header(){
    const {color} = useContext(SnakeContext)
    return(
        <header style={{backgroundColor:color}}>
             Header
        </header>
    )
}
function Main(){
    const {name,fangs,speed} = useContext(SnakeContext)
    return(
        <div>
            <h3>{name}</h3>
            <h3>{fangs}</h3>
            <h3>{speed}</h3>
        </div>
    )
}