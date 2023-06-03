import React from 'react'

export default function FunctionExample() {

  return (
    <>
      <Example name="nitesh" salary={87000} dept="Test" head="Head"/>
    </>
  )
}

function Example(data){

    return(
        <>
         <div>
            <p>Name: {data.name}</p>
            <p>Salary: {data.salary}</p>
            <Department dept={data.dept} head={data.head}/>
         </div>
        </>
    )
}

function Department(deptInfo){
    return(
        <>
        <div>
            <p>Dept Name: <b>{deptInfo.dept}</b></p>
            <p>Dept Head is : <b>{deptInfo.head}</b></p>
        </div>
        </>
    )
}