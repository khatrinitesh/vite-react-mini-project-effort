import React, { useState } from 'react'


const commonStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    background: 'silver',
    overflow: 'hidden',
    transition: '0.3s'
};

const visibleStyle = {
    ...commonStyle,
    width:'200px'
}
const hiddenStyle = {
    ...commonStyle,
    width:'0px'
}

export default function CustomApp() {

    const [visible,setVisible] = useState(false);
  return (
    <div style={{height: '200px'}}>
    {!visible && <button onClick={() => setVisible(true)}>Show</button>}
    <div style={visible ? visibleStyle : hiddenStyle}>
      <button onClick={() => setVisible(false)}>Hide</button>
      <div>
        1<br />
        2<br />
        3<br />
      </div>
    </div>
  </div>
  )
}
