import React from 'react'

function PurecomponentTwo({title,desc}) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  )
}
export default React.memo(PurecomponentTwo)
