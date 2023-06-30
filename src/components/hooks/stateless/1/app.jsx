import React, { Component } from 'react';
import Movie from './movies';

export default class CustomApp extends Component {

    constructor(props){
        super(props)
        this.state = {
            movies:[]
        }
    }

    async componentDidMount(){
        try{
            const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=2f59754079cb51126497ed7754eef01f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
            const movies = await res.json();
            this.setState({
                movies:movies.results
            });
            console.log(movies);
        }
        catch(e){
            console.log(e);
        }
    }
  render() {
    return (
      <div>
        {this.state.movies.map((val) => {
            return(
                <Movie key={val.id} movie={val}/>
            )
        })}
      </div>
    )
  }
}


