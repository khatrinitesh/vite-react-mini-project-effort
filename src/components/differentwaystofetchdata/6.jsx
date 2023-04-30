import React,{useState,useEffect} from 'react'

export default function FetchDisplayDataApiExample() {
  return (
    <>
        <Example/>
    </>
  )
}


function Example(){

    const urls = ['https://jsonplaceholder.typicode.com/posts','https://jsonplaceholder.typicode.com/albums','https://jsonplaceholder.typicode.com/photos'];

    const requests = urls.map(url => fetch(url));

    Promise.all(requests)
    .then(response => Promise.all(response.map(response => response.json)))
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error(error);
    });
    return(
        <></>
    )
}

// function Example(){

//     const fullData = async () => {
//         try{
//             fetch('https://jsonplaceholder.typicode.com/posts')
//             .then((res) => res.json())
//             .then((res) => console.log(res));
//         }
//         catch(error){
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         fullData();
//     },[]);

//     return(
//         <></>
//     )
// }

// function Example(){

//     const [user,setUser] = useState([])

//     const fetchData = () => {
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then((response) => response.json())
//         .then((data) => setUser(data))
//     }

//     useEffect(() => {
//         fetchData()
//     },[])
    
//     return(
//         <>
//         {user.map((val,index) => {
//             return(
//                 <div key={index}>
//                     <h3>{val.title}</h3>
//                 </div>
//             )
//         })}
//         </>
//     )
// }