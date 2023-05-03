import React,{useState,useEffect} from 'react'

export default function ErrorBoundaryExample() {
  return (
    <>
      <Example/>
    </>
  )
}

// EXAMPLE 1
class Example extends React.Component{
    render(){
        return(
            <>
              <ErrorBoundary>  
                <BuggyCounter />  
            </ErrorBoundary> 
              <ErrorBoundary>  
                <BuggyCounter />  
            </ErrorBoundary>  
            
            </>
        )
    }
}
class ErrorBoundary extends React.Component{

    constructor(props) {  
        super(props);  
        this.state = { error: false ,errorInfo:null};  
        this.handleClick = this.handleClick.bind(this);  
      }  

      handleClick(){
        try{

        }
        catch(error){
            this.setState({error});
        }
      }

    render(){
       if(this.state.errorInfo){
        return (
            <div>  
            <h2>Something went wrong.</h2>  
            <details style={{ whiteSpace: 'pre-wrap' }}>  
                {this.state.error && this.state.error.toString()}  
                <br />  
                {this.state.errorInfo.componentStack}  
            </details>  
            </div> 
        )
       }
       return this.props.children;  
    }
}

class BuggyCounter extends React.Component {  
    constructor(props) {  
      super(props);  
      this.state = { counter: 0 };  
      this.handleClick = this.handleClick.bind(this);  
    }  
      
    handleClick() {  
      this.setState(({counter}) => ({  
        counter: counter + 1  
      }));  
    }  
      
    render() {  
      if (this.state.counter === 3) {  
        throw new Error('I crashed!');  
      }  
      return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;  
    }  
  }  
