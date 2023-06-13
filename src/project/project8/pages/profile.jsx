import React, { useState,useEffect, useRef,useReducer, createRef } from 'react';
import Banner from '../components/banner';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useFetchExample} from '../components/usefetch';

export default function Profile() {

    let {username} = useParams();

    const x = 15;
    // debugger;
  return (
    <div className='content'>
        <Banner title="Profile" desc="Lorem Ipsum"/>
        <h3>Welcome to {username}</h3>
        {x}
        <br/>
        <Counter counter="3" title="counter"/>
        <ExampleTwo/>
        <FetchExample/>
        <ReducerExampeOne/>
        <FormOne/>
        {/* <FetchExampleThree/> */}
    </div>
  )
}

const Counter = ({counter =0,title}) => {
    return(
        <>
            {counter}
            <br/>
            {title}
        </>
    )
}

const ExampleTwo = () => {
    const [clicked,setClicked] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleOutClick = (e) => {
            e.preventDefault();
            setClicked(ref.current !== e.target)
        }
        window.addEventListener('click',handleOutClick);
        return () => window.removeEventListener('click',handleOutClick);
    },[])

    return(
        <>
         <button ref={ref}>
            {`clickedOutside: ${clicked}`}
        </button>
        </>
    )
}

const FetchExampleThree = () => {
    const [post,setPost] = useState([]);

    useEffect(() => {
        const axiosPostsData = async () => {
            const response = await axios('https://jsonplaceholder.typicode.com/posts');
            setPost(response.data)
        }
        axiosPostsData()
    },[])

    return(
        <div>
            <h2>Axios fetch api data</h2>
            {post.map((val,index) => {
                return(
                    <div key={index}>
                        <h3>{val.title}</h3>
                        <p>{val.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

// const FetchExampleTwo = () => {
//     const [post,setPost] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
//             const postdata = await resp.json();
//             setPost(postdata);
//         }
//         fetchData()
//     },[])

//     const postDetails = post.map((val) => {
//         return(
//             <div key={val.id}>
//                 <h3>{val.title}</h3>
//                 <p>{val.body}</p>
//             </div>
//         )
//     })
//     return(
//         <>
//          <h1>Fetch API With UseState and UseEffect</h1>
//          <h2>Dummy API - https://jsonplaceholder.typicode.com/posts</h2>
//          {post && postDetails}
//         </>
//     )
// }

const FetchExample = () => {
    //Send the url to the useFetch custom hook
    const {loading,error,data} = useFetchExample('https://reqres.in/api/users')

    if(loading){
        return 'loading'
    }
    else if (error){
        return 'error'
    }
    return(
        <>
         <h2>API data</h2>
         <div>
            {data.map((e) => {
                return(
                    <div className="h1" key={e.id}>
                        <img src={e.avatar} alt="Profile" />
                        <div> {e.first_name} {e.last_name}</div>
                        <div> {e.email}</div>
                        <button onClick={() => btnDel(e.id)}>&times;</button>
                    </div>
                )
            })}
         </div>
        </>
    )
}

function ReducerExampeOne(){
    const [ignored, forceUpdate] = useReducer(x => x - 1,0);
    const [happy,forceHappyUpdate] = useReducer(x => x + 1 ,0)
    const [multiple,setMultiple] = useReducer(x => x * 2,0) 
    return(
        <>
        <button onClick={forceUpdate}>forece update</button>
        <p>Forced update counter: {ignored}</p>
        <hr/>
        <button onClick={forceHappyUpdate}>forece update</button>
        <p>Forced update counter: {happy}</p>
        <hr/>
        <button onClick={setMultiple}>forece update</button>
        <p>Forced update counter: {multiple}</p>
        </>
    )
}

class FormOne extends React.Component{

    constructor(props){
        super(props)
        this.usernameRef = createRef();
        this.passwordRef = createRef();
    }

   handleSubmit =(e)=>{
    e.preventDefault();
    const data = {
      username: this.usernameRef.current.value,
      password: this.passwordRef.current.value
    };
    const json = JSON.stringify(data, null, 2);
    console.clear();
    console.log(json);
    }


    render(){
        return(
            <>
             <form onSubmit={this.handleSubmit}>
                <div>
                <label>Username: </label>
                <input ref={this.usernameRef} type="text" />
                </div>
                <div>
                <label>Password: </label>
                <input ref={this.passwordRef} type="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
            </>
        )
    }
}
