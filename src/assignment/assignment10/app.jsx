import React, { Component } from 'react'

export default class CustomApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            message:'nitesh'
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        this.setState({
            message:'sameet'
        })
    }
  render() {
    return (
      <div>
         {this.state.message}
         <button onClick={this.handleChange}>Change</button>
      </div>
    )
  }
}
