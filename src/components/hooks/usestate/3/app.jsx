import React, { Component } from 'react'

export default class CustomApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            count:0
        }
        this.handleIncCount = this.handleIncCount.bind(this)
        this.handleDecCount = this.handleDecCount.bind(this)
        this.handleResetCount = this.handleResetCount.bind(this)
    }

    handleIncCount = () => {
        this.setState({
            count:this.state.count  +  1
        })
    }
    handleDecCount = () => {
        this.setState({
            count:this.state.count  -  1
        })
    }
    handleResetCount = () => {
        this.setState({
            count:0
        })
    }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleIncCount}>+</button>
        <button onClick={this.handleDecCount}>-</button>
        <button onClick={this.handleResetCount}>Reset</button>
      </div>
    )
  }
}
