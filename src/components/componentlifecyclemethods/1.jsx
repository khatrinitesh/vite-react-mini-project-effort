import React,{useState,useEffect } from 'react';

export default function ComponentLifeCycleExample() {
  return (
    <>
      <Example/>
    </>
  )
}


function Example(){
    return(
        <>
        <Test/>
        </>
    )
}

class Test extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            hello:'world'
        }
    }

    componentWillMount(){
        console.log("componentWillMount()");
    }
    componentDidMount(){
        console.log("componentDidMount()");
    }

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("shouldComponentUpdate()");
    //         return true;
    // }
    componentWillUpdate()
    {
        console.log("componentWillUpdate()");
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate()");
    }

    changeCase(){
        this.setState({
            hello:'Geek'
        })
    }
    render(){

        
        return(
            <>
             {this.state.hello}
             <button onClick={this.changeCase()}>Change Text</button>
            </>
        )
        
    }
}
