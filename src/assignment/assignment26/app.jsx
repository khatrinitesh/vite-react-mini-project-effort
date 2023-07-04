import React, { useState } from 'react'

export default function CustomApp() {
    const users= [ 
        {id:1,name:'nitesh'},
        {id:2,name:'sameet'},
        {id:3,name:'arvind'},
        {id:4,name:'urvashi'},
    ]

    const [data,setData] = useState(users)
    

    const btnDel = (id) => {
        const newData = users.filter((val) => val.id !== id)
        setData(newData)
    }
  return (
    <div>
      {data.map((val) => {
        return(
            <div key={val.id}>{val.name} <button onClick={() => btnDel(val.id)}>&times;</button></div>
        )
      })}
    </div>
  )
}
