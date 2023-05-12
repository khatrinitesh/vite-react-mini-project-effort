import React, { Component } from 'react'

export default class ToDoExample extends Component {

    constructor(props){
        super(props)
        this.state = {
            movies:["Star Wars", "Return of the Jedi", "Empire Strikes Back"]
        }
    }
  render() {
    return (
      <div>
        {this.state.movies.map((movie) => {
            return(
                <div key={movie}>
                    {movie}
                </div>
            )
        })}
      </div>
    )
  }
}
