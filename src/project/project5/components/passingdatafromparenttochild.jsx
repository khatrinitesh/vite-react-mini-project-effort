import React,{ useState } from 'react'

export default function PassingDataPC() {
  return (
    <>
      {/* <ParentComponent/> */}
      <Parent1/>
      <Parent2/>
    </>
  )
}

// reusing components => By passing data to a child component, you can reuse the same component in different parts of your app with different data, making your code more modular and maintainable. For example, you can pass a different array of items as a prop to a child component and display different lists of items in different parts of your app.

const Parent1 = () => {

    const item = ['a','b','c']
    return(
        <Child item={item}/>
    )
}
const Parent2 = () => {

    const item2 = ['d','e','f']
    return(
        <Child item={item2}/>
    )
}

const Child = ({item,btnRemove}) => {

    return(
        <>
         <ul>
                {item.map((val) => {
                    return(
                        <li key={val}>
                            {val}
                            <button onClick={btnRemove}>&times;</button>
                        </li>
                    )
                })}
         </ul>
        </>
    )
}

/// displaying data 
// const Parent = () => {
//     const items = ["Item 1", "Item 2", "Item 3"];

//     return(
//         <>
//         <Child items={items}/>
//         </>
//     )
// }

// const Child = ({items}) => {
//         return(
//             <>
//                 <ul>
//                     {items.map((val) => {
//                         return(
//                             <li key={val}>{val}</li>
//                         )
//                     })}
//                 </ul>
//             </>
//         )
// }

// updating data 
// const Parent = () => {
//     const [formData,setFormData]  = useState({
//         name:'',
//         email:''
//     })

//     const handleSubmit  = (e) => {
//         e.preventDefault();
//         console.log(formData)
//     }
//     return(
//         <>
//          <Child formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
//         </>
//     )
// }

// const Child = ({formData,setFormData,handleSubmit}) => {

//     return(
//         <>
//          <form onSubmit={handleSubmit}>
//             <input type="text" value={formData.name} onChange={(e) => setFormData({...formData,name:e.target.value})}/>
//             <input type="text" value={formData.email} onChange={(e) => setFormData({...formData,email:e.target.value})}/>
//             <button>Submit</button>
//          </form>
//         </>
//     )
// }

// react hooks
// const MyParent = () => {
//     const [theme,setTheme] = useState('dark');

//     return(
//         <>
//          <MyChild theme={theme} setTheme={setTheme}/>
//         </>
//     )
// }
// const MyChild = ({theme,setTheme}) => {
//     return(
//         <>
//         <div style={{backgroundColor:theme === 'dark' ? "black" :  "white"}}>
//             <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'black')}>Change theme</button>
//         </div>
//         </>
//     )
// }

// render props
// const MyParent = () => (
//     <MyChild 
//     render={({theme}) => (
//         <div className="mychildcomponent" style={{backgroundColor:theme === 'dark' ? 'black' : 'white'}}></div>
//     )}/>
//   );
  

//   const MyChild = ({render}) => render({theme:'dark'})


// highder order component
// const WithThem = (Component) = (props) => {
//     <Component {...props} theme="dark"/>
// }

// const MyComponent = ({theme}) => {
//     return(
//         <div style={{backgroundColor:theme === 'dark' ? 'black' : 'white'}}>
//             nitesh khatri
//         </div>
//     )
// }

// state 
// function ParentComponent(){
//     const [msg,setMsg] = useState('hello from parent');
//     return(
//         <>
//          <ChildComponent msg={msg} setMsg={setMsg}/>
//         </>
//     )
// }

// function ChildComponent(props){

//     function handleCC(){
//         props.setMsg('hello from child')
//     }

//     return(
//         <>
//          <div>{props.msg}</div>
//          <button onClick={handleCC}>Update Message</button>
//         </>
//     )
// }
