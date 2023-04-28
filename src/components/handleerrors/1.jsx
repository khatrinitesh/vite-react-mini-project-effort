import React from 'react';

export default function HandleErrorsExample() {
  return (
    <div>
      <ErrorBoundary/>
    </div>
  )
}


class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hasError:false,
            error:null,
            errorInfo:null
        }
    }

    componentDidCatch(error,errorInfo){
        this.setState({
            hasError:true,
            error:error,
            errorInfo:errorInfo
        });
    }
    render(){
        if(this.state.hasError){
            return(
                <div>
                    <h1>Something went wrong.</h1>
                    <div>
                        {this.state.error  && this.state.error.toString()}
                        <br/>
                        {this.state.errorInfo.componentStack}
                    </div>
                </div>
            )
        }
        return this.props.children;
    }
}