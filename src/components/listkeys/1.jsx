import React from 'react'
// import {name,age} from './example';
import Message from './example';

export default function ListKeysExample() {
    
  return (
    <>
      <Example/>
      <Message/>
    </>
  )
}



function Example(){
    return(
        <>
        {myList}
        </>
    )
}





const myArray = ['apple','mango','grape']
const myList = myArray.map((val) => <p>{val}</p>)

// const items = [
//     {
//         id:1,name:'Apple'
//     },
//     {
//         id:2,name:'Orange'
//     },
//     {
//         id:3,name:'Banana'
//     },
// ]


// const ListElement = items.map((val,index) => {
//     return(
//         <li key={index}>{val.index} {" - "} {val.name}</li>
//     )
// })
// class ListComponent extends React.Component{

//     state = {
//         items:[{
//             id:1,name:'Apple'
//         },
//         {
//             id:2,name:'Apple'
//         },
//         {
//             id:3,name:'Apple'
//         },]
//     }

//     removeItem = (item) => {
//         const updateItems = this.state.items.filter((val) => val !== item)
//         this.setState({
//             items:updateItems
//         })
//     }
//     render(){
//         return(
//             <>

//              <ul>
//                     {this.state.items.map((val,id) => {
//                         return(
//                             <li key={id}>{val.name} <button onClick={this.removeItem
//                             }>&times;</button></li>
//                         )
//                     })}
                
//              </ul>
//             </>
//         )
//     }
// }






