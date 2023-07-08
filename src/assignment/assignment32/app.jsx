import React from 'react'

const user = [
    {id:1,age:34}
]

export default function app() {
  return (
    <div>
      <Example items='user'/>
    </div>
  )
}


// const Example = () => {
//     return <Root/>
// }

function Root(){
    return(
        <>Root</>
    )
}

// const Example = props => {
//     return <Root {...props}/>
// }

// const Example = props => {
//     return <Root {...props}/>
// }

// const Example = ({name,title}) => {
//     return(
//         <>
//          <h2>{name}</h2>
//          <h2>{title}</h2>
//         </>
//     )
// }

// const Example = items => {
//     return(
//         <>
//          <ul>
//             {
//                 items.map((id,age) => {
//                     return(
//                         <li key={id}>{age}</li>
//                     )
//                 })
//             }
//         </ul>
//         </>
//     )
// }

const Example = ({name,...rest}) => {
    return(
        <>
         <div {...rest}>{name}</div>
        </>
    )
}