import React,{useState,useEffect } from 'react';

export default function PureComponentExample() {
  return (
    <>
      <Example/>
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

