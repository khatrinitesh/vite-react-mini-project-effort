import React from 'react'

export default function Banner({title,paragraph}) {
  return (
    <div className='banner_content'>
      <h3>{title}</h3>
      <p>{paragraph}</p>
    </div>
  )
}
