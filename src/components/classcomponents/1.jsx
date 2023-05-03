import React from 'react'

export default function ClassExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    return(
        <>
         <Employee name="nitesh"/>
        </>
    )
}

class Employee extends React.Component{

    render(){
        return(
            <>
             <h2>Employee Details...</h2>
             <p>
                <label>Name: <b>{this.props.name}</b></label>
             </p>
            </>
        )
    }
}