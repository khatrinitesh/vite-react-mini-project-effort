import React from 'react'

export default function Banner({bannerTitle,bannrDesc}) {
  return (
    <div className='banner_content'>
      <h3>{bannerTitle}</h3>
      <p>{bannrDesc}</p>
    </div>
  )
}
