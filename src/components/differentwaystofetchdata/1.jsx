import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function FetchExample(){
  return(
    <>
      <QueryClientProvider client={queryClient}>
        <Example />
      </QueryClientProvider>
     <Example/>
    </>
  )
}

function Example(){

  const { loading, data, error } = useFetch("https://reqres.in/api/users")


  if(loading){
    return "loading";
  }
  else if(error){
    return "error";
  }
  return (
    <div className="App">
      <h1>Hooks</h1>
      <div>
        {data.map((e) => {
          return(
            <>
             {data.map((e) => (
              <div className="" key={e.id}>
                <img src={e.avatar} alt="Profile" />
                <p> {e.first_name} {e.last_name}</p>
                <p> {e.email}</p>
              </div>
            ))}
            </>
          )
        })}
      </div>
    </div>
  );
}


const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {

    const getData = async () => {
        try {

            const response = await fetch(url);
            const results = await response.json();
            setLoading(false)
            setData(results.data);
            setError(false)

        } catch (error) {
            setLoading(false)
            setError(false)
            setError(error)
        }
    }
    getData();
}, [url]);

return {loading,data,error}
};

// function Example(){
//   const emojis = [
//     {
//       emoji: '😀',
//       name: "test grinning face"
//     },
//     {
//       emoji: '🎉',
//       name: "party popper"
//     },
//     {
//       emoji: '💃',
//       name: "woman dancing"
//     }
//   ];

//   const displayEmojiName = event => alert(event.target.id);
//   return(
//     <>
//      {emojis.map((emoji => {
//       return(
//         <div>
//           <button onClick={displayEmojiName}>
//             <span aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
//            </button>
//         </div>
//       )
//      }))}
//     </>
//   )
// }

// function Example(){

//   const url = 'https://jsonplaceholder.typicode.com/users'

//   const [data,setData] = useState([]);

//   async function fetchData(){
//     try{
//       const response = await  axios.get(url);
//       setData(response.data);
//     }
//     catch(error){
//       console.error(error)
//     }
//   }

//   useEffect(() => {
//     fetchData()
//   },[])
//   return(
//     <>
//      {data.map((dataObj, index) => {
//           return (
//             <div key={index}
//               style={{
//                 width: "15em",
//                 backgroundColor: "orange",
//                 padding: 2,
//                 borderRadius: 10,
//                 marginBlock: 10,
//               }}
//             >
//               <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
//             </div>
//           );
//         })}
//     </>
//   )
// }

// function Example(){

//   const url = 'https://jsonplaceholder.typicode.com/users'

//   const [data,setData] = useState([]);

//   const fetchData = () => {
//     fetch(url)
//     .then((res)=> res.json())
//     .then((data) => setData(data))
//   }

//   useEffect(() => {
//     fetchData()
//   },[])
//   return(
//     <>
//      {data.map((dataObj, index) => {
//           return (
//             <div key={index}
//               style={{
//                 width: "15em",
//                 backgroundColor: "#35D841",
//                 padding: 2,
//                 borderRadius: 10,
//                 marginBlock: 10,
//               }}
//             >
//               <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
//             </div>
//           );
//         })}
//     </>
//   )
// }

// export default function CustomApp() {


//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((response) => console.log(response))
//     },[])
//   return (
//     <div>
//     </div>
//   )
// }

// function Example(){

//   const url = 'https://jsonplaceholder.typicode.com/users'

//   const [data,setData] = useState([]);
//   const [loading,setLoading] = useState(false);
//   const [error,setError] = useState('');

//   const fetchData = async () => {
//     setLoading(true)
//     const response = await fetch(url)
//     try{
//       if(!response.ok){
//         throw new Error('sorry something went wrong')
//       }
//       const data = await response.json()
//       setData(data)
//       setLoading(false)
//     }
//     catch(error){
//       setError(error.message)
//       setLoading(false)
//     }
//   }

//   useEffect(() => {
//     fetchData()
//   },[])

//   if(loading){
//     return(
//       <div>Loading...</div>
//     )
//   }

//   if(error){
//     return(
//       <div>{error}</div>
//     )
//   }
//   return(
//     <>
//      {data.length > 0 && (
//       <ul>
//         {data.map((user) => {
//           return(
//             <li key={user.id}>
//               {user.name} - {user.email}
//             </li>
//           )
//         })}
//       </ul>
//      )}
//     </>
//   )
// }

// function Example(){

//   const url = 'https://jsonplaceholder.typicode.com/users'

//   const [data,setData] = useState([]);

//   const fetchData = () => {
//     axios.get(url)
//     .then((res) => res.json())
//     .then((data) => setData(data))
//   }

//   useEffect(() => {
//     fetchData()
//   },[])
//   return(
//     <>
//      {data.map((dataObj, index) => {
//           return (
//             <div key={index}
//               style={{
//                 width: "15em",
//                 backgroundColor: "orange",
//                 padding: 2,
//                 borderRadius: 10,
//                 marginBlock: 10,
//               }}
//             >
//               <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
//             </div>
//           );
//         })}
//     </>
//   )
// }

// function Example(){

//   const url = 'https://jsonplaceholder.typicode.com/users'

//   const [data,setData] = useState([]);

//   const fetchData = () => {
//     fetch(url)
//     .then((res)=> res.json())
//     .then((data) => setData(data))
//   }

//   useEffect(() => {
//     fetchData()
//   },[])
//   return(
//     <>
//      {data.map((dataObj, index) => {
//           return (
//             <div key={index}
//               style={{
//                 width: "15em",
//                 backgroundColor: "#35D841",
//                 padding: 2,
//                 borderRadius: 10,
//                 marginBlock: 10,
//               }}
//             >
//               <p style={{ fontSize: 20, color: 'white' }}>{dataObj.name}</p>
//             </div>
//           );
//         })}
//     </>
//   )
// }

// export default function CustomApp() {


//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((response) => console.log(response))
//     },[])
//   return (
//     <div>
//     </div>
//   )
// }
