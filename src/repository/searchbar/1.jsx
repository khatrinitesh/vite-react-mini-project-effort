import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchBarExample() {
  return (
    <>
       <Example/>
    </>
  )
}

function Example(){

  const initialState = [
    {
      "id":1,
      "name":"Ram",
      "rollNo":2,
      "phoneNo":"765656565"
    },
    {
      "id":2,
      "name":"Sham",
      "rollNo":3,
      "phoneNo":"78676767676",

    },
    {
      "id":3,
      "name":"Pari",
      "rollNo":4,
      "phoneNo":"65656656565"
    },
    {
    "id":5,
    "name":"Nikita",
    "rollNo":5,
    "phoneNo":"6565445454"
    },
    {
      "id":1,
      "name":"Ram",
      "rollNo":2,
      "phoneNo":"765656565"
    },
    {
      "id":2,
      "name":"Sham",
      "rollNo":3,
      "phoneNo":"78676767676",

    },
    {
      "id":3,
      "name":"Pari",
      "rollNo":4,
      "phoneNo":"65656656565"
    },
    {
    "id":5,
    "name":"Nikita",
    "rollNo":5,
    "phoneNo":"6565445454"
    },
    {
      "id":1,
      "name":"Ram",
      "rollNo":2,
      "phoneNo":"765656565"
    },
    {
      "id":2,
      "name":"Sham",
      "rollNo":3,
      "phoneNo":"78676767676",

    },
    {
      "id":3,
      "name":"Pari",
      "rollNo":4,
      "phoneNo":"65656656565"
    },
    {
    "id":5,
    "name":"Nikita",
    "rollNo":5,
    "phoneNo":"6565445454"
    }
  ]

  const [arr,setArr] = useState(initialState)

  const handleChange  = (e) => {
    e.preventDefault();
    if(e.target.value == ''){
      window.location.reload(true)
      const tempArr = arr 
      return setArr(tempArr)
    }
    const searchResult = arr.filter(item => item.name.toLowerCase().startsWith(e.target.value.toLowerCase()) || item.phoneNo.toLowerCase().startsWith(e.target.value.toLowerCase()))
    setArr(searchResult)
  }

  return(
    <>
     <input type="text" onChange={handleChange}/>
     <table style={{border:"1px solid #000", marginLeft:"20px"}}>
      <thead>
      <tr style={{border:"1px solid #000"}}>
        <th style={{border:"1px solid #000"}}>
          Name
        </th>
        <th style={{border:"1px solid #000"}}>
          rollNo
        </th>
        <th style={{border:"1px solid #000"}}>
          Phone
        </th>
      </tr>
      </thead>
      <tbody>
        {arr.map((val) => {
          return(
            <tr>
              <td style={{border:"1px solid #000"}}>{val.name}</td>
              <td style={{border:"1px solid #000"}}>{val.rollNo}</td>
              <td style={{border:"1px solid #000"}}>{val.phoneNo}</td>
            </tr>
          )
        })}
      </tbody>
     </table>
    </>
  )
}

// function Example(){
//     const [results,setResults] = useState([]);

//     return(
//         <>
//             <div className='search-bar-container'>
//                 <SearchBar setResults={setResults}/>
//                 {results && results.length > 0 && <SearchResultList results={results}/>}
//             </div>
//         </>
//     )
// }


// function SearchBar({setResults}){

//     const [input, setInput] = useState("");

//     const fetchData = (value) => {
//       fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((json) => {
//           const results = json.filter((user) => {
//             return (
//               value &&
//               user &&
//               user.name &&
//               user.name.toLowerCase().includes(value)
//             );
//           });
//           setResults(results);
//         });
//     };
  
//     const handleChange = (value) => {
//       setInput(value);
//       fetchData(value);
//     };
//     return(
//         <>
//         <div className="input-wrapper">
//             <FaSearch id="search-icon" />
//             <input
//                 placeholder="Type to search..."
//                 value={input}
//                 onChange={(e) => handleChange(e.target.value)}
//             />
//         </div>
//         </>
//     )
// }

// function SearchResultList({results}){
//     return(
//         <div className='results-list'>
//             {results.map((result,id) => {
//                 return(
//                     <SearchResult result={result.name} key={id}/>
//                 )
//             })}
//         </div>
//     )
// }

// function SearchResult({result}){
//     return(
//         <>
//          <div
//       className="search-result"
//       onClick={(e) => alert(`You selected ${result}!`)}
//     >
//       {result}
//     </div>
//         </>
//     )
// }
