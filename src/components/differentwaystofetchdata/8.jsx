import React,{useState,useEffect} from 'react';

import "bootstrap/dist/css/bootstrap.css";

export default function FetchExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){

    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);

    const fetchData = async() => {
        setLoading(true)
        try{
            const res = await fetch('http://localhost:3000/posts')
            if(!res.ok){
                throw new Error('sorry something went wrong')
            }
            const data = await res.json();
            setUser(data);
            setLoading(false)
        }
        catch(error){
            setError(error.message)
            setLoading(false)
        }
    }

    const btnRemove = (id) => {
        const finalData = user.filter((val) => val.id !== id)
        setUser(finalData)
    }

    useEffect(() => {
        fetchData()
    },[])

    if(loading){
        return(
            <div>{loading}</div>
        )
    }
    if(error){
        return(
            <div>{error}</div>
        )
    }
    return(
        <>
        <div className='container'>
            <div className='row'>
                {user.map((val,index) => {
                    return(
                        <div className="card col-4 p-5 mb-3" key={index}>
                            <h3>{val.name}</h3>
                            <h3>{val.email}</h3>
                            <h3>{val.adderss}</h3>
                            <button onClick={() => btnRemove(val.id)}>Delete</button>
                        </div>
                    )
                })}
            </div>
         </div>
        </>
    )
}

// class Example extends React.Component{

//     state = {
//         isLoading: true,
//         users: [],
//         error: null
//     };

//     getFetchUsers(){
//         this.setState({
//             loading:true
//         },() => {
//             fetch('http://localhost:3000/posts')
//             .then((res) => res.json())
//             .then(result => this.setState({
//                 loading:false,
//                 users:result
//             })).catch(console.log);
//         })
//     }

//     componentDidMount() {
//         this.getFetchUsers();
//     }
//     render(){
//         const {users,error} = this.state;
//         return(
//             <>
//                 <h1>All User</h1>
//                 {
//                     error ? <p>error.message</p> : null
//                 }
//                 {users.map(user => {
//                     const {adderss,name,email} = user;
//                     return(
//                         <div key={name}>
//                             <p>Name: {name}</p>
//                             <p>Email: {email}</p>
//                             <p>Address: {adderss}</p>
//                             <hr/>
//                         </div>
//                     )
//                 })}
//             </>
//         )
//     }
// }
