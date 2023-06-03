import React,{useState,useEffect } from 'react'

export default function JsonExample() {
  return (
    <>
      <Example/>
    </>
  )
}

// function Example(){
//     const [json,setJson] =useState({})

//     const fetchData = async () => {
//         const res = await fetch('https://yesno.wtf/api')
//         const data = res.json();
//         setJson(data);
//     }

//     useEffect(() => {
//         fetchData()
//     },[])
//     return(
//         <>
//          {JSON.stringify(json)}
//         </>
//     )
// }

function Example(){
    const sampleJSON = {
        "arrOfNumbers": [1, 2, 3, 4],
  "arrOfStrings": ["a", "b", "c", "d"],
  "arrOfObjects": [{ "a": 1, "b": 1 }, { "a": 2, "b": 2 }, { "a": 3, "b": 3 }]
        // "object": {
        //   "name": "Pluralsight",
        //   "number": 1,
        //   "address": "India",
        //   "website": "https://www.pluralsight.com/"
        // }
      }
      
    return(
        <>
        <div>
            <h2>Array numbers</h2>
            {sampleJSON.arrOfNumbers.map((item,i) => {
                return(
                    <div key={i}>
                        {item}
                    </div>

                )
            })}
            <h2>Array of strings</h2>
            {sampleJSON.arrOfStrings.map((item,i) => {
                return(
                    <div key={i}>{item}</div>
                )
            })}
            <h2>Array of objects</h2>
            {sampleJSON.arrOfObjects.map((item,i) => {
                return(
                    <div key={i}>{item.a} - {item.b}</div>
                )
            })}
        </div>
        </>
    )
}
