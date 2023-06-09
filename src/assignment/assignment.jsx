import React,{ useEffect,useCallback ,useMemo}  from 'react';
import { useState } from 'react';

export default function AssignmentOne() {
  return (
    <>
      <Example/>
    </>
  )
}

// example 5 
function Example(){
    const url = 'https://jsonplaceholder.typicode.com/posts'
    const [list,setList] = useState([])

    const fetchData = () => {
        fetch(url)
        .then((res) => res.json())
        .then((result) => setList(result))
    }

    useEffect(() => {
        fetchData()
    },[])
    return(
        <>
         {list.map((val,index) => {
            return(
                <Superb key={index} title={val.title} body={val.body}/>
            )
         })}
        </>
    )
}
const Superb = ({title,body}) => {
    return(
        <>
         <div className='card'>
            <h3>{title}</h3>
            <p>{body}</p>
         </div>
        </>
    )
}


// example 4 
// function Example(){
//     return(
//         <>
//          Math Expression:
//          <h2>{3+59*5}</h2>
//         </>
//     )
// }

// example 3
// class Example extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             name:'nitesh',
//             age:34
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(){
//         this.setState({
//             name:'sameet',
//             age:41
//         })
//     }
//     render(){
//         return(
//             <>
//              <h2>{this.state.name}</h2>
//              <h2>{this.state.age}</h2>
//              <button onClick={this.handleChange}>Change text</button>
//             </>
//         )
//     }
// }

// example 2 
// function Example(){
//     const initialState = [1,2,3,4]
//     const [list,setList] = useState(initialState)



//     const handleDel = (index) => {
//         list.splice(index,1);
//         setList([...list])
//     }
//     return(
//         <>
//             <ListCustom list={list} onDel={handleDel}/>   
//         </>
//     )
// }
// const ListCustom = ({list,onDel}) => {
//     return(
//         <>
//          <ul>
//             {list.map((val,index) => {
//                 return(
//                     <li key={index}>
//                         {val}
//                         <button onClick={() => onDel(index)}>&times;</button>
//                     </li>
//                 )
//             })}
//          </ul>
//         </>
//     )
// }

// example 1
// function Example(){

//    const [num1,setNum1] = useState(0);
//    const [num2,setNum2] = useState(0);

//    const add = (a,b) => {
//     return parseInt(a) + parseInt(b)
//    }

//    const cal1 = useMemo(() => {
//     return add(num1,num2)
//    },[num1,num2])

//     function handleClick(){
//         console.log('sameet khatri')
//     }

//     function handleChange(){
//         setNum1(num1 => num1 + 1)
//         setNum2(num1 => num1 + 1)
//     }
//     useEffect(() => {

//     });
//     return(
//         <>
//          <button onClick={function(){ console.log('nitesh khartri'),handleClick}}>Click</button>
//          <input type='text' value={num1} onChange={handleChange} />
//          <input type='text' value={num2} onChange={handleChange} />
//          {cal1}
//         </>
//     )
// }
