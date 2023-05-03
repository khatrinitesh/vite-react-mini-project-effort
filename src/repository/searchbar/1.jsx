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
    const [results,setResults] = useState([]);

    return(
        <>
            <div className='search-bar-container'>
                <SearchBar setResults={setResults}/>
                {results && results.length > 0 && <SearchResultList results={results}/>}
            </div>
        </>
    )
}


function SearchBar({setResults}){

    const [input, setInput] = useState("");

    const fetchData = (value) => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((user) => {
            return (
              value &&
              user &&
              user.name &&
              user.name.toLowerCase().includes(value)
            );
          });
          setResults(results);
        });
    };
  
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
    return(
        <>
        <div className="input-wrapper">
            <FaSearch id="search-icon" />
            <input
                placeholder="Type to search..."
                value={input}
                onChange={(e) => handleChange(e.target.value)}
            />
        </div>
        </>
    )
}

function SearchResultList({results}){
    return(
        <div className='results-list'>
            {results.map((result,id) => {
                return(
                    <SearchResult result={result.name} key={id}/>
                )
            })}
        </div>
    )
}

function SearchResult({result}){
    return(
        <>
         <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
        </>
    )
}
