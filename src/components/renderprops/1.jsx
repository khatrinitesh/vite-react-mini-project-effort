import React,{useState,useEffect } from 'react';

export default function RenderPropsExample() {
  return (
    <>
      <Example/>
    </>
  )
}


function Example(){
    return(
        <>
        <h1>Render Props Example</h1>
        {/* <SamepleRenderProps/> */}
        {/* <ChildComponent/> */}
        {/* <FinalExampleOne/> */}
        <FinalExxx/>
        </>
    )
}

// function Final(){
//     return(
//         <>
//         {/* <Title render={() => <h1>nitesh khatri</h1>}/> */}
//         <Title
//          render={() => {
//             return(
//                 <div>
//                     <Nitesh/>
//                     <hr/>
//                     <Sameet/>
//                 </div>
//             )
//          }}/>

//         </>
//     )
// }


function FinalExxx(){
    return(
        <>
        <Example111 render={() => {
            return(
                <div>nitesh khatri - sameet khatri</div>
            )
        }}/>
        </>
    )
}

const Example111 = (props) => props.render()

// function Final(){
//     return(
//         <>
//          <FinalExample render={() => {
//             return(
//                 <div>
//                     <h1>nitesh khatri</h1>
//                     <h1>sameet khatri</h1>
//                 </div>
//             )
//          }}/>
//         </>
//     )
// }


// class FinalExample extends React.Component{
//     render(){
//         return(
//             <>
//              {this.props.render()}
//             </>
//         )
//     }
// }

// const Nitesh = () => {
//     return(
//         <>Nitesh Khatri</>
//     )
// }
// const Sameet= ()=>{
//     return(
//         <>Sameet Khatri</>
//     )
// }
// const Title = (props) => props.render();


// class FinalExampleOne extends React.Component{

//     render(){
//         return(
//             <ExampleOne
//             render={() => {
//                 return(
//                     <div>This is finally updated</div>
//                 )
//             }} />
//         )
//     }
// }


// class ExampleOne extends React.Component{
//     render(){
//         return(
//             <>
//              <h2>this is example one</h2>
//              {this.props.render()}
//             </>
//         )
//     }
// }


// class MergeComponent extends React.Component{
//     render(){
//         return(
//             <>
//              <h2>This is parent component</h2>
//              {this.props.render()}
//             </>
//         )
//     }
// }

// class ChildComponent extends React.Component{
//     render(){
//         return(
//             <MergeComponent 
//             render={() => {
//                 return(
//                     <div>nitesh khatri</div>
//                 )
//             }}/>
//         )
//     }
// }


// class RenderPropsComponent extends React.Component{

//     render(){
//         return(
//             <>
//                 <h2>I am Child Component</h2>
//                 {this.props.render()}
//             </>
//         )
//     }
// }

// class SamepleRenderProps extends React.Component{

//     render(){
//         return(
//             <RenderPropsComponent 
//             render={() => {
//                 return(
//                     <div>
//                         <h3>I am coming from render props</h3>
//                     </div>
//                 )
//             }}
//             />
//         )
//     }
// }