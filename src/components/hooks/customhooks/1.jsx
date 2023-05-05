import React,{ useEffect, useState} from 'react';

export default function CustomHooksExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
  return(
    <>
      <Employee/>
    </>
  )
}

function useList(url){

    const [data,setData] = useState([]);

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    });
    return data;
}

function Employee(){
    const employees = useList('https://jsonplaceholder.typicode.com/users')

    return(
        <>
         <h2>Employees Data...</h2>
         <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {employees.map(emp => (
            <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.username}</td>
                <td>{emp.email}</td>
            </tr>
        ))}
        </tbody>
        </table>
        <Department/>
        </>
    )
}
function Department(){

    const deparmtnet = useList('https://jsonplaceholder.typicode.com/users')


    const btnRemove= (item) => {
        deparmtnet.splice(deparmtnet.indexOf(item)-1, 1)
    }
    
    return(
        <div style={{border:'1px solid red',padding:'10px'}}>
        <h2>Department Data...</h2>
        <hr/>
         {deparmtnet.map((val,id) => {
            return(
                <div key={id}>
                    <h4>Name: {val.name}</h4>
                    <h4>Street: {val.address.street}</h4>
                    <h4>Suite: {val.address.suite}</h4>
                    <h4>City: {val.address.city}</h4>
                    <button onClick={() => btnRemove(id)}>&times;</button>
                    <hr/>
                </div>
            )
         })}
        </div>
    )
}