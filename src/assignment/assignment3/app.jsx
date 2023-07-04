import React, { Component } from 'react'

export default class CustomApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            message:'welcome to react world'
        }
    }
  render() {
    return (
      <div>
        {this.state.message}
      </div>
    )
  }
}
