import React from 'react'

export default function Banner({title,desc}) {
  return (
    <div className='banner_content'>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  )
}
