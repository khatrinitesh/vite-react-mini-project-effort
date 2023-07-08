import React,{ Component } from 'react';

class ErrorBoundary extends Component
{
  constructor(){
    super();
    this.state={
      hasError:false
    }
  }
  
componentDidCatch(error,info){
this.setState(state => ({...state,hasError:true}))
console.log(error,info)
}
  render(){
    if(this.state.hasError){
    return <h1>ErrorBoundary: something went wrong, fallback UI</h1>
    }else{
    return this.props.children;
    }
 }
}
export default ErrorBoundary