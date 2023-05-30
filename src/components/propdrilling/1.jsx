import React,{useState} from 'react'

export default function PropDrillingExample() {
  return (
    <>
      <Example />
    </>
  )
}

function Example(){

  const [data,setData] = useState('nitesh khatri is data')
  return(
    <ParentComp>
      <ComponentOne>
        <ComponentTwo data={data}/>
      </ComponentOne>
    </ParentComp>
  )
}

function ParentComp({children}){
  return(
    <div className='parentcomp'>
      <h3>this is parent component</h3>
      {children}
    </div>
  )
}

function ComponentOne({children}){
  return(
    <div className='comp1'>
      <h3>This is component one</h3>
      {children}
    </div>
  )
}

function ComponentTwo({data}){
  return(
    <div className='comp2'>
      <h3>This is component two</h3>
      <h3>Welcome, {data}</h3>
    </div>
  )
}

// function Example(){

//   const [data,setData] = useState('some state')
//   return(
//     <>
//      <ParentComponent>
//       <ComponentOne>
//         <ComponentTwo data={data}/>
//       </ComponentOne>
//      </ParentComponent>
//     </>
//   )
// }

// function ParentComponent({children}){
//   return(
//     <>
//       <div className='parentcomp'>{children}</div>
//     </>
//   )
// }

// function ComponentOne({children}){
//   return(
//     <div className='compone'>
//      <p>
//         This is Component1, it receives component2 as a child and renders it
//       </p>
//       {children}
//     </div>
//   )
// }

// function ComponentTwo({data}){
//   return(
//     <div className='comptwo'>
//       <h3>This is Component two with the received {data}</h3>
//     </div>
//   )
// }


// function Example(){

//   const [fname,setFname] = useState('firstName');
//   const [lname,setLname] = useState('lastName');
//   return(
//     <>
//      <div>This is a Parent component</div>
//       <br />
//       <ChildA fname={fname} lname={lname}/>
//     </>
//   )
// }

// function ChildA({fname,lname}){
//   return(
//     <>
//      This is ChildA Component.
//       <br />
//       <ChildB fname={fname} lname={lname}/>
//     </>
//   )
// }
// function ChildB({fname,lname}){
//   return(
//     <>
//      This is ChildB Component.
//       <br />
//       <ChildC fname={fname} lname={lname} />
//     </>
//   )
// }
// function ChildC({fname,lname}){
//   return(
//     <>
//      This is ChildC Component.
//       <br />
//       <h3> Data from Parent component is as follows:</h3>
//       <h4>{fname}</h4>
//       <h4>{lname}</h4>
//     </>
//   )
// }



// function Example(){
//   return(
//     <>
//       <First content="Hi Example"/>
//     </>
//   )
// }

// function First({content}){
//   return(
//     <>
//     <h3>I am the first component</h3>;
//      <Second content={content}/>
//     </>
//   )
// }

// function Second({content}){
//   return(
//     <>
//     <h3>I am the second component</h3>;
//      <Third content={content}/>
//     </>
//   )
// }
// function Third({content}){
//   return(
//     <>
//       <h3>I am the third component</h3>;
//      <ComponentNeedProps content={content}/>
//     </>
//   )
// }
// function ComponentNeedProps(){
//   return(
//     <>
//      <div>nitesh khatri</div>
//     </>
//   )
// }

// function Example(){
//     const person = {
//         name:'nitesh',
//         age:34
//     }
//     return(
//         <>
//           {/* {person.name} - {person.age} */}
//           <Child {...person}/>
//         </>
//     )
// }

// function Child(props){
//     const {name,age} = props
//     return(
//         <>
//          <h1>Hello, {name} - {age}</h1>
//         </>
//     )
// }