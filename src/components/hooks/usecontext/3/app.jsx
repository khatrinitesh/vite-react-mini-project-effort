import React, { useState,createContext, useContext } from 'react'

export default function CustomApp() {
  return (
    <div>
      <Final/>
    </div>
  )
}

export const CustomContext = createContext();
function Final(){
    const [user,setUser] = useState({name:"nitesh",age:34});
    return(
        <CustomContext.Provider value={{user}}>
            <ChildA/>
        </CustomContext.Provider>
    )
}
function ChildA({user}){
    return(
        <div className='childa'>
         <h3>ChildA </h3>
         <ChildB user={user}/>
        </div>
    )
}
function ChildB(){
    return(
        <div className='childb'>
            <h3>ChildB </h3>
        <ChildC/>
        </div>
    )
}
function ChildC(){
    return(
        <div className='childc'>
            <h3>ChildC</h3>
            <ChildD/>
        </div>
    )
}
function ChildD(){
    return(
        <div className='childd'>
             <h3>ChildD</h3>
            <ChildE/>
        </div>
    )
}
function ChildE(){
    return(
        <div className='childe'>
             <h3>ChildE</h3>
             <ChildF/>
        </div>
    )
}
function ChildF(){
    return(
        <div className='childf'>
             <h3>ChildF</h3>
            <Last/>
        </div>
    )
}
function Last(){
    const {user}  = useContext(CustomContext)
    return(
        <div className='last'>
            ChildC --- {user.name} {user.age}
        </div>
    )
}