import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

export default function ReduxExample() {
  return (
    <>
      <Example/>
    </>
  )
}


const employeeData = {
    salary:40000
}

const reducer = (state=employeeData,action) => {
    switch(action.type){
        case "INCREMENT" : return {salary:state.salary + 1000};
        case "DECREMENT" : return {salary:state.ssalary - 2000};
        default:return state;
    }
}   

const store = createStore(reducer);

const Example = () => {
    return(
        <Provider store={store}>
            <Employee></Employee>
        </Provider>
    )
}

class Employee extends React.Component{

    constructor(props){
        super(props);
    }

    incrementSalary = () => {
        this.props.dispatch({type:'INCREMENT'});
    }

    decrementSalary = () => {
        this.props.dispatch({type:'DECREMENT'});
    }
    render(){
        return(
            <>
             <div>
                <h2>Welcome to Employee Component...</h2>
                <div>
                    <p>
                        <label>Employee Salary : <b>{this.props.salary}</b></label>
                    </p>
                <button onClick={this.incrementSalary}>Increment</button>          
                <button onClick={this.decrementSalary}>Decrement</button>
                </div>
            </div>
            </>
        )
    }
}