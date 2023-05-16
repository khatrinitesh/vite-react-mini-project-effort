import React,{useState,useEffect} from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

export default function UseEffectExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    // const [example,setExample] = useState('');
    // const [sum,setSum] = useState('');
    // const [fullname,setFullName] = useState('');

    useEffect(() =>{
        const resizeDocumentTitle = () => {
            document.title = window.innerWidth;
            document.title = window.innerHeight;
        }
        window.addEventListener('resize',resizeDocumentTitle)
        return() => {
            window.removeEventListener('resize',resizeDocumentTitle)
        }
        
        // let x = window.innerWidth;
        // let y = window.innerHeight;
        // let z = `${x} ${y}`
        // setExample(z)

        // function sum(a,b){
        //     return a + b 
        // }
        // setSum(sum(10,10))


        // const fname = 'nitesh'
        // const lname = 'khatri'
        // const fullname = `${fname} ${lname}` 
        // setFullName(fullname)
    },[])
    return(
        <>
            {/* {example}
            <br/>
            {sum}
            <br/>
            {fullname}
            <br/> */}
            
        </>
    )
}

// function Example(){
//     const [employeeCount, setEmployeeCount]=useState(0);
//     const [noOfDays,setNoOfDays]=useState(0);

//     useEffect(() => {
//         var handle =setInterval(getEmpCount,500)
//         return () => {
//             clearInterval(handle)
//         }
//     });

//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res) => res.json())
//         .then((data) => setNoOfDays(data))
//     })
//     function getEmpCount(){
//         alert('Getting the Employees Count')
//         fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json())
//         .then(
//             (result) => {          
//             setEmployeeCount(result.length);
//             }
//         );
//     }
//     return(
//         <></>
//     )
// }

// function Example(){

//     const [employees,setEmployees]=useState([]);
//     const [searchText, setSearchText]=useState('');
//     const [employeeCount, setEmployeeCount]=useState(0);
    

//     useEffect(() => {
//         alert('we are inside useffect method')
//         fetch('https://jsonplaceholder.typicode.com/users'+searchText)
//         .then((res) => res.json())
//         .then((data) => setEmployees(data));
//     },[searchText,employeeCount])

//     const onSearchTextChange = (e) => {
//         e.preventDefault()
//         setSearchText(e.target.value);
//     }

//     const btnAddEmp = () => {
//         setEmployeeCount(employeeCount+1)
//     }
//     return(
//         <>
//          <h2>Employees Data...</h2>
//          <p>
//             <label>Search By Name</label>
//             <input type="text" onChange={onSearchTextChange} value={searchText}/>
//          </p>
//          <button onClick={btnAddEmp}>Add Employee</button>
//          <table>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {employees.map(emp=>(
//                     <tr key={emp.Id}>
//                         <td>{emp.id}</td>
//                         <td>{emp.name}</td>
//                         <td>{emp.email}</td>
//                     </tr>
//                 ))}
//             </tbody>
//          </table>

//         </>
//     )
// }

// function Example(){
//   const [emp,setEmp] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((result) => {
//         setEmp(result)
//     });
//   },[]);

//   return(
//     <>
//       <div>
//         <h2>Employees Data...</h2>
//         <table className='table'>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Street</th>
//                     <th>City</th>
//                     <th>zipcode</th>
//                 </tr>
//             </thead>
//             <tbody>
//                {emp.map((val) => {
//                 return(
//                     <tr key={val.id}>
//                         <td>{val.id}</td>
//                         <td>{val.name}</td>
//                         <td>{val.email}</td>
//                         <td>{val.address.street}</td>
//                         <td>{val.address.city}</td>
//                         <td>{val.address.zipcode}</td>
//                     </tr>
//                 )
//                })}
//             </tbody>
//         </table>
//       </div>
//     </>
//   )
// }
