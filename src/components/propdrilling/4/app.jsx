import React,{useState} from 'react'

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

function Example(){
    const [fname,setFname] = useState('nitesh')
    const [lname,setLname] = useState('khatri')
    const btnChange = () => {
        setFname('sameet');
    }
    return(
        <>
            <ChildA fname={fname} lname={lname} handleChange={btnChange}/>
        </>
    )
}
function ChildA({fname,lname,handleChange}){
    return(
        <>
        <h3>ChildA</h3>
        <ChildB fname={fname} lname={lname} handleChange={handleChange}/>
        </>
    )
}

function ChildB({fname,lname,handleChange}){
    return(
        <>
        <h3>Child B</h3>
        <ChildC fname={fname} lname={lname} handleChange={handleChange}/>
        </>
    )
}
function ChildC({fname,lname,handleChange}){
    
    return(
        <>
         <h3>Child C</h3>
         {fname} - {lname}
         <button onClick={handleChange}>Change</button>
        </>
    )
}