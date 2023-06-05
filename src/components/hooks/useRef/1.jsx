import React,{useRef,useEffect,createRef} from 'react'

export default function UseRefCustom() {
    
  return (
    <div>
        <Example/>
    </div>
  )
}

class Example extends React.Component{

    constructor(props){
        super(props)
        this.emailInputRef = createRef();
        this.pwdInputRef = createRef();
    }

    componentDidMount(){
        this.emailInputRef.current.focus();
        this.pwdInputRef.current.focus();
    }
    render(){
        return(
            <>
            <form>
                <input type="email" name="email" ref={this.emailInputRef} />
                <input type="password" name="password" ref={this.pwdInputRef} />
                <button type="submit">Login</button>
            </form>
            </>
        )
    }
}


// function Example(){
//     const emailInputRef = useRef(null);
//     const handleClick=(e) => {
//         e.preventDefault();
//         emailInputRef.current.focus();
//     }
//     return(
//         <>
//         <input type="email" name="email" ref={emailInputRef} />
//         <button type="submit" onClick={handleClick}>Login</button>
//         </>
//     )
// }