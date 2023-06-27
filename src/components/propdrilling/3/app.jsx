import React,{createContext, useContext, useState} from 'react'

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}
// assignment 6 
function Example(){
    const [user,setState] = useState({name:'nitesh'})
    return(
        <>
        <Navbar/>
        <MainPage content={<Content message={<Message user={user}/>}/>}/>
        </>
    )
}
function Navbar(){
    return(
        <>
         <nav>
            <ul>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
            </ul>
         </nav>
        </>
    )
}
function MainPage({content}){
    return(
        <>
        Main page 
         {content}
        </>
    )
}
function Content({message}){
    return(
        <>
        Content 
        {message}
        </>
    )
}
function Message({user}){
    return(
        <>
         Message: 
         {user.name}
        </>
    )
}

// assignment 5 
// function Example(){
//     const [data,setData] = useState('some state')
//     return(
//         <>
//          <ComponentOne>
//             <ComponentTwo data={data}/>
//          </ComponentOne>
//         </>
//     )
// }
// function ComponentOne({children}){
//     return(
//         <><div>ComponentOne {children}</div></>
//     )
// }
// function ComponentTwo({data}){
//     return(
//         <><div>ComponentTwo - {data}</div></>
//     )
// }

// assignment 4 
// function Example(){
//     const [data, setData] = useState({name:'some state'})
//     return(
//         <>
//          <ComponentOne ComponentTwo={<ComponentTwo data={data}/>} />
//         </>
//     )
// }
// function ComponentOne({ComponentTwo}){
//     return(
//         <>
//          ComponentTwo
//          {ComponentTwo}
//         </>
//     )
// }
// function ComponentTwo({data}){
//     return(
//         <>
//          <h3>ComponentTwo</h3>
//          {data.name}
//         </>
//     )
// }

// assignment 3 with prop drilling
// function FinalExample(){
//     const [user, setUser] = useState({ name: 'Aegon' ,age:34,email:"nitesh.khatri88@gmail.com"})
    
//     return(
//         <>
//         <Main user={user}/>
//         </>
//     )
// }
// function Navbar(){
//     return(
//         <>
//          <nav>
//             <ul>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/">Home</a></li>
//                 <li><a href="/">Home</a></li>
//             </ul>
//          </nav>
//         </>
//     )
// }
// function Main({user}){
//     return(
//         <>
//         <Navbar />
//         <Content user={user}/>
//         </>
//     )
// }

// function Content({user}){
//     return(
//         <>
//             <Message user={user}/>
//         </>
//     )
// }
// function Message({user}){
//     const {name,age,email} = user
//     return(
//         <>
//          <h3>{name}</h3>    
//          <p>{age}</p>
//          <p>{email}</p>
//         </>
//     )
// }

// assignment 2 Without Prop drilling. it is use context 
// let myContext = createContext(null)
// function Example(){
//     const [title, setTitle] = useState('Scaler Topics')
//     return(
//         <myContext.Provider value={{title}}>
//             <br/>
//             <ChildA/>
//         </myContext.Provider>
//     )
// }
// function ChildA(){
//     return(
//         <>
//         <ChildB/>
//         </>
//     )
// }
// function ChildB(){
//     return(
//         <>
//         <ChildC/>
//         </>
//     )
// }
// function ChildC(){
//     const {title} = useContext(myContext)
//     return(
//         <>
//         The props are passed to this component directly.
//         <br />
//         <h3> Welcome to</h3>
//          <h3>{title}</h3>
//         </>
//     )
// }


// assignment 1  With Using Prop Drilling
// function Parent(){
//     const [title,setTitle] = useState(['Nitesh Khatri'])
//     return(
//         <>
//          <ChildA title={title}/>
//         </>
//     )
// }
// function ChildA({title}){
//     return(
//         <>
//         <ChildB title={title}/>
//         </>
//     )
// }
// function ChildB({title}){
//     return(
//         <>
//          <ChildC title={title}/>
//         </>
//     )
// }
// function ChildC({title}){
//     return(
//         <>--- {title}</>
//     )
// }

// with use context api 
// export const CustomContext = createContext();
// function Example(){
//     const [fname,setFname] = useState('nitesh')
//     const [lname,setLname] = useState('khatri')
//     return(
//         <CustomContext.Provider value={{fname,lname}}>
//             <ChildA/>
//         </CustomContext.Provider>
//     )
// }
// function ChildA(){
//     return(
//         <>
//          ChildA
//          <ChildB/>
//         </>
//     )
// }
// function ChildB(){
//     return(
//         <>
//          ChildB
//          <ChildC/>
//         </>
//     )
// }
// function ChildC(){
//     const {fname,lname} = useContext(CustomContext)
//     return(
//         <>
//          ChildC
//          <br/>
//          {fname} - {lname}
//         </>
//     )
// }

// without context api
// function Parent(){
//     const [fName,setFname] = useState('NITESH')
//     const [lName,setLname] = useState('KHATRI')
//     return(
//         <>
//          <ChildA fName={fName} lName={lName}/>
//         </>
//     )
// }

// function ChildA({fName,lName}){
//     return(
//         <>
//          This is ChildA Component.
//          <br/>
//          <ChildB fName={fName} lName={lName}/>
//         </>
//     )
// }

// function ChildB({fName,lName}){
//     return(
//         <>
//          This is ChildB Component.
//          <br/>
//         <ChildC fName={fName} lName={lName}/>
//         </>
//     )
// }

// function ChildC({fName,lName}){
//     return(
//         <>
//          This is ChildC component.
//         <br />
//         <h3>Data from Parent component is as follows:</h3>
//         <h4>{fName}</h4>
//         <h4>{lName}</h4>
//         </>
//     )
// }