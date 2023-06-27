import React, { createContext, useContext, useState } from 'react'

export const Custom = createContext('');

export default function CustomApp() {

    const [user,setUser] = useState([
        {id:1,name:'nitesh khatri',button:'btnDel'},
        {id:2,name:'sameet khatri',button:'btnDel'},
        {id:3,name:'arvind khatri',button:'btnDel'},
        {id:4,name:'urvashi khatri',button:'btnDel'}
    ])
    
  return (
    <div>
      <Custom.Provider value={{user}}>
        <ChildA></ChildA>
      </Custom.Provider>
    </div>
  )
}
function ChildA({children}){
    return(
        <>
        <br/>
        <ChildB/>
        </>
    )
}
function ChildB(){
    const {user} = useContext(Custom)
   
    return(
        <>
         <br/>
         {user.map((val) => {
            return(
                <div>{val.name} <button onClick={() => btnDel(val.id)}>{val.button}</button></div>
            )
         })}
        </>
    )
}

