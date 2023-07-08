import React from 'react'

export default function Card({data}) {
  return (
    <div>
      {data.map((val,index) => {
        return(
            <div key={index}>
                <h1>{val.title}</h1>
                <p>{val.desc}</p>
                <Link to={`/card/${card.title}`}>view more</Link>
            </div>
        )
      })}
    </div>
  )
}
