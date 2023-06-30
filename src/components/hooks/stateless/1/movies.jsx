import React from 'react'

export default function Movie({movie}) {
    const {title,popularity} = movie
  return (
    <div>
      <h3>{title}</h3>
      <p>{popularity}</p>
      <button onClick={() => btnDel}>&times;</button>
    </div>
  )
}
