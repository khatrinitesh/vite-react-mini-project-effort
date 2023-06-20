import React from 'react';
import { connect } from 'react-redux';
import {incrementCounter,decrementCounter} from './actions';

const Counter = ({count,increment,decrement}) => {
    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        count:state.count
    }
}
const mapDispatchToProps = dispatch => {
    return{
        increment:() => dispatch(incrementCounter()),
        decrement:() => dispatch(decrementCounter()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);