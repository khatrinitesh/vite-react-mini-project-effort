import React from 'react'

export default function ArrowsFunctionExample() {
  return (
    <>
        {/* <Hi data="nitesh khatri"/> */}
        <Example/>
        {/* <Example data='nitesh khatri'/>  */}
    </>
  )
}

class Example extends React.Component{
  oneParmeter = a => e => {
    console.log(a)
  }

  twoParmeter = (a,b) => e => {
    console.log(a+b)
  }
  render(){
    return(
      <>
       <button onClick={this.oneParmeter(10)}>one parameter</button>
       <button onClick={this.twoParmeter(20,30)}>two parameter</button>
      </>
    )
  }
}

// function factory(){
//   return (a,b) => a+b 
// }

// const sumFunc1 = factory();
// const sumFunc2 = factory();

// console.log(sumFunc1)
// console.log(sumFunc2)
// console.log(sumFunc1 === sumFunc2); 
// console.log(sumFunc1 === sumFunc1);

// const Example = data =>  'Hello' + data

// class Example extends React.Component{

//   oneParameter = (a) => e => {
//     console.log(a)
//   }
//   twoParameter = (a,b) => e => {
//     console.log(a+b)
//   }
  
//   render(){
//     return(
//       <>
//        <button onClick={this.oneParameter(32)}>one parameter</button>
//        <br/>
//        <button onClick={this.twoParameter(10,43)}>one parameter</button>
//       </>
//     )
//   }
// }

// arrow functions allow us to write shorter function syntax:

// const Hi = data => 'Hello'  + data

// const Hi = (data) => {return 'Hello'  + data}
// console.log(Hi('nitesh khatri'))

// const Hi = () => {return 'hi nitesh khatri'}

// const Hi = function(){
//     return "hello nitesh khatri"
// }

// const Hi = () => 'hi nitesh khatri'


