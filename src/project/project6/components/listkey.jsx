import React, { useEffect } from 'react'

export default function ListKey() {
  return (
    <div>
      <Example/>
    </div>
  )
}

function Example(){
    const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    useEffect(() => {
        console.log("Child Component redered");
    },[])
    return(
        <>
         {items.map((val,index) => {
            return(
                <div key={index}>
                    {val}
                </div>

            )
         })}
        </>
    )
}
