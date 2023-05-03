import React from 'react';

const employees = [

    {Id:101, Name:'Abhinav',location:'Bangalore',Salary:12345},
  
    {Id:102, Name:'Abhishek',Location:'Chennai',Salary:23456},
  
    {Id:103, Name:'Ajay',Location:'Bangalore',Salary:34567}
  
  ];

export default function IteratingListExample() {
  return (
    <>
     {element}
    </>
  )
}

const element = <DisplayEmp employeeList={employees}></DisplayEmp>


function Employee(props){
    return(
        <div style={{border:'1px solid red'}}>
            <p>Employee ID : <b>{props.data.Id}</b></p>
            <p>Employee Name : <b>{props.data.Name}</b></p>
            <p>Employee Location : <b>{props.data.Location}</b></p>
            <p>Employee Salary : <b>{props.data.Salary}</b></p>
        </div>
    )
}

function DisplayEmp(props){
    const empList = props.employeeList;
    const listElements = empList.map((emp) => {
        <Employee key={emp.Id} data={emp}></Employee>
    });

    return(
        <>
        {listElements}
        </>
    )
}



