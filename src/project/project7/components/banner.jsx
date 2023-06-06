import React from 'react'

export default function Banner({bannertitle,bannerdesc}) {
  return (
    <div className='banner_content'>
      <h3>{bannertitle}</h3>
      <p>{bannerdesc}</p>
    </div>
  )
}
