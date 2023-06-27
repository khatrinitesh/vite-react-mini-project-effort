import React, { useContext } from 'react';
import { SnakeContext } from './context';

export default function CustomApp() {
  return (
    <div>
      <Jungle/>
    </div>
  )
}

function Jungle(){
    const snake = {
        name: "Black Mamba",
        fangs: "6.5 mm",
        speed: "12.5 miles per hour",
        color: "#964B00", // dark brown
        friends:[
            {
                name:'vijay',contact:1
            },
            {
                name:'vijay',contact:1
            },
            {
                name:'vijay',contact:1
            },
        ]
    }
    return(
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
            <h1>Snake</h1>
        </header>
    )
}
function Main(){
    const {name,fangs,speed,friends} = useContext(SnakeContext)
    return(
        <main>
            <p>Name: <span>{name}</span></p>
            <p>Venom Fangs: <span>{fangs}</span></p>
            <p>Speed: <span>{speed}</span></p>
        </main>
    )
}