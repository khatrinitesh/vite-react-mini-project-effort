import React from 'react'

export default function ArrowsFunctionExample() {

   
  return (
    <>
        <Hi data="nitesh khatri"/>
    </>
  )
}

// arrow functions allow us to write shorter function syntax:

const Hi = data => 'Hello'  + data

// const Hi = (data) => {return 'Hello'  + data}
// console.log(Hi('nitesh khatri'))

// const Hi = () => {return 'hi nitesh khatri'}

// const Hi = function(){
//     return "hello nitesh khatri"
// }

// const Hi = () => 'hi nitesh khatri'


