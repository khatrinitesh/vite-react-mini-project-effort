import React from 'react'

function PureComponent({salary,age}) {
    console.log('inside pure component')
  return (
    <div>
      <h1>Inside pure compoennt</h1>
      <h2>Salary {salary}</h2>
      <h2>Age {age}</h2>
    </div>
  )
}

export default React.memo(PureComponent)