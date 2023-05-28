import React,{ useState,createContext,useContext } from 'react';


export default function ContextApi() {
  return (
    <>
      <ParentComponent/>
    </>
  )
}
const MyContext = createContext();

const ParentComponent = () => {
    const [message, setMessage] = useState("Hello from parent");
    // const btnChange = () => {
    //   setMessage('hello from child')
    // }
    return(
        <>
        <MyContext.Provider value={{message,setMessage}}>
            <ChildComponent/>
        </MyContext.Provider>
        </>
    )
}

const ChildComponent = () => {
    const {message} = useContext(MyContext)
    return(
        <>
        {message}
        {/* <button onClick={btnChange}>Change</button> */}
        </>
    )
}