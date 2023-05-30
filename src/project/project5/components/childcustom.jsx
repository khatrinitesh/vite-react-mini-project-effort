import React from 'react'

export default function ChildCustom({getColorfromChild}) {
  return (
    <div>
      <h2>Child {{}}</h2>
        <input type="text" onChange={getColorfromChild }/>
    </div>
  )
}
