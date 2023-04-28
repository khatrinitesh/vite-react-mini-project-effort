import React,{useState } from 'react';
import './preloader.scss';
import { Audio } from 'react-loader-spinner'

export default function PreloaderExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
  
  return(
    <>
    <Audio
      height="80"
      width="80"
      radius="10"
      color="purple"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
    </>
  )
}

// function Example(){
//     const [users, setUsers] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [errorMessage, setErrorMessage] = useState("");

//     const handleFetch = () => {
//         setIsLoading(true);
//         fetch("https://reqres.in/api/users?page=0111")
//           .then((respose) => respose.json())
//           .then((respose) => {
//             if(!response.ok){
//                 throw new Error('sorry something went wrong')
//             }
//              setUsers(respose.data)
//              setIsLoading(false)
//              // Optional code to simulate delay
//              // setTimeout(() => {
//              //   setUsers(respose.data);
//              //   setIsLoading(false);
//              // }, 3000);
//           })
//           .catch(() => {
//              setErrorMessage("Unable to fetch user list");
//              setIsLoading(false);
//           });
//       };
//       const renderUser = (
//         <div className="userlist-container">
//           {users.map((item, index) => (
//             <div className="user-container" key={index}>
//               <img src={item.avatar} alt="" />
//               <div className="userDetail">
//                 <div className="first-name">{`${item.first_name}                
//                                        ${item.last_name}`}</div>
//                 <div className="last-name">{item.email}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     return(
//         <>
//          <div className="App">
//             {isLoading ? <LoadingSpinner /> : renderUser}
//             {errorMessage && <div className="error">{errorMessage}</div>}
//             <button onClick={handleFetch} disabled={isLoading}>
//                 Fetch Users
//             </button>
//             </div>
//         </>
//     )
// }

// function LoadingSpinner(){
//     return(
//         <>
//          <div className="spinner-container">
//             <div className="loading-spinner"></div>
//             </div>
//         </>
//     )
// }

