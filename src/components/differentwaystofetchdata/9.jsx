import axios from 'axios';
import React,{useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function FetchExample() {

  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    return(
        <><MyComponent/></>
    )
}

function MyComponent(){
    const ListLoading = WithListLoading(List);
    const [appState, setAppState] = useState({
        loading:false,
        repos:null
      });

    useEffect(() => {
        setAppState({loading:true});
        const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
        fetch(apiUrl)
        .then((res) => res.json())
        .then((repos) => {
            setAppState({loading:false,repos:repos});
        });
    },[setAppState])
    return(
        <>
            <ListLoading isLoading={appState.loading} repos={appState.repos} />
        </>
    )
}

// function MyComponent(){
//     const ListLoading = WithListLoading(List);
//     const [appState, setAppState] = useState({
//         loading: false,
//         repos: null,
//       });

//     useEffect(() => {
//         setAppState({ loading: true });
//         const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
//         axios.get(apiUrl)
//         .then((repos) => {
//           const allRepos = repos.data;
//           setAppState({ loading: false, repos: allRepos });
//         });
//       }, [setAppState]);
//     return(
//         <>
//             <ListLoading isLoading={appState.loading} repos={appState.repos} />
//         </>
//     )
// }

function WithListLoading(Component){

    return function WithLoadingComponent({isLoading,...props}){
        if(!isLoading){
            return(
                <>
                 <Component {...props}/>
                </>
            )
        }
        return(
            <>
             <p>Please wait for sometime...</p>
            </>
        )
    }
}

const List = (props) => {
    const {repos} = props;
    if(!repos || repos.length === 0){
        return(
            <>
             <p>No repos, sorry</p>
            </>
        )
    }
    return(
        <ul>
            <h2 className='list-head'>Available Public Repositories</h2>
            {repos.map((repo) => {
                return(
                    <li key={repo.id} className='list'>
                        <span className='repo-text'>{repo.name}</span>
                        <br/>
                        <span className='repo-text'><strong>{repo.description}</strong></span>
                        <hr/>
                    </li>
                )
            })}
        </ul>
    )

}

// class MyComponent extends React.Component{
//     componentDidMount(){
//         const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
//         fetch(apiUrl)
//         .then((response) => response.json())
//         .then((data) => console.log(data))
//     }
//     render(){
//         return(
//             <>
//             <h1>my Component has Mounted, Check the browser 'console' </h1>;
//             </>
//         )
//     }
// }

// function BookList(){
//     const [books, updateBooks] = useState([]);
//     const [title,setTitle] = useState('');

//     useEffect(function effectFunction() {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => response.json())
//             .then((data) => updateBooks(data))
            
//     }, []);


//     const btnRemove = (id) => {
//         const newList = books.filter((val) => val.id !== id)
//         updateBooks(newList)
//     }

//     const handleChange = (e) => {
//         setTitle(e.target.value)
//     }

//     const btnAdd = () => {
//         const newList = books.concat({title,id:uuidv4()})
//         updateBooks(newList);
//         setTitle('');
//     }
//     return(
//         <>
//         <input type='text' value={title} onChange={handleChange}/>
//         <button onClick={btnAdd}>Add</button>
//          <ul>
//             {books.map((book) => {
//                 return(
//                     <li key={book.id}>{book.title} <button onClick={() => btnRemove(book.id)}>&times;</button></li>
//                 )
//             })}
//          </ul>
//         </>
//     )
// }

// function Example(){

//     const [loading,setLoading] = useState(true);
//     const [data,setData] = useState([]);

//     const btnRemove = (id) => {
//         const finalData = data.filter((val) => val.id !== id)
//         setData(finalData)
//     }

//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try{
//                 const {data: response} = await axios.get('https://jsonplaceholder.typicode.com/posts')
//                 setData(response);
//             }
//             catch(error){
//                 console.error(error.message);
//             }
//             setLoading(false);
//         }
//         fetchData();
//     },[])
//     return(
//         <>
//          {loading && <div>Loading...</div>}
//          {!loading && (<div><h2>doing stuff with data</h2> {data.map((item) => (<div>{item.title} <button onClick={() => btnRemove(item.id)}>&times;</button></div>))}</div>)}
//         </>
//     )
// }
