import React,{useState,useEffect } from 'react';
import PureComponent from './purecomponent';
import PurecomponentTwo from './purecomponent2';

export default function PureComponentExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
  // const [id,setId] = useState(1)
  // const [salary,setSalary] = useState(3000)
  // const [age,setAge] = useState(34)

  const [title,setTitle] = useState('heading title')
  const [desc,setDesc] = useState('Lorem ipsum is paragraph')

  // useEffect(() => {
  //  setInterval(() => {
  //     console.log('Inside Interval')
  //     setId(id + 1)
  //  },2000)
  // })
  return(
    <>
    {/* Id: {id}
     <PureComponent id={id} salary={salary} age={age}/> */}
     <PurecomponentTwo  title={title} desc={desc}/>
    </>
  )
}


// function Example(){
//     return(
//         <>
//             <Count count={1}/>
//             <br/>
//             <Count count={2}/>
//             <br/>
//             <Count count={3}/>
//         </>
//     )
// }

// class Result extends React.PureComponent{
//         render(){
//         const {points = 1} = this.props;
//         return(
//             <>
//                 {points}
//                 <button onClick={btnInc}>+</button>
//             </>
//         )
//     }
// }

// function Count({count}){
//     return(
//         <>Coffee count ${count}</>
//     )
// }

