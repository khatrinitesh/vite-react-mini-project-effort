import React,{ useState }  from 'react';

export default class CustomExample extends React.Component {
    render(){
    return (
        <div>
            asda
        </div>
    )
    }
}

// const FunctionCounter = () => {
//     const [counter,setCounter] = useState(0);

//     const btnInc = () => {
//         setCounter(counter => counter + 1)
//     }
//     const btnDec = () => {
//         setCounter(counter => counter - 1)
//     }
//     const btnRes = () => {
//         setCounter(0)
//     }

//     return(
//         <>
//          {counter}
//          <button onClick={btnInc}>+</button>
//          <button onClick={btnDec}>-</button>
//          <button onClick={btnRes}>Reset</button>
//         </>
//     )
// }

//  class ClassCounter extends React.Component{

//     constructor(props){
//         super(props)
//         this.state = {
//             counter:0
//         }
//     }

//     btnInc = () => {
//         this.setState({
//             counter:this.state.counter+1
//         })
//     }
//     render(){
//         return(
//             <>
//              {this.state.counter}
//              <button onClick={this.btnInc}>Increment</button>
//             </>
//         )
//     }
// }
