import React from 'react'

export default function Image(props) {

    const {url} = props
  return (
    <li>
      <img src={url} alt=""/>
    </li>
  )
}
