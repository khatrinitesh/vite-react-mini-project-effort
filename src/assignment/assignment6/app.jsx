import { extend } from 'jquery'
import React, { Component } from 'react'
import { render } from 'react-dom'

export default class CustomApp extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

class ParentComponent extends React.Component{

    
    render(){
        return(
            <>
             <ChildComponent name="nitesh" age="34"/>
            </>
        )
    }
}

class ChildComponent extends React.Component{
    render(){
        return(
            <>
            <p>{this.props.name}</p>
            <p>{this.props.age}</p>
            </>
        )
    }
}