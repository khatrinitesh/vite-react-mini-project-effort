import React,{useState} from 'react'

export default function EventHandler() {
  return (
    <div>
      <Example/>
    </div>
  )
}

function Example(){

    const [hover,setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true)
    }
    const handleMouseLeave = () => {
        setHover(false)
    }

    const DivStyle = {
        height: '100px',
        width: '100px',
        backgroundColor: hover ? 'yellow' : 'blue',
        color: hover ? 'black' : 'white',
        fontWeight: 'bold',
        padding: '8px',
        textAlign: 'center'
    }

    
    return(
        <>
         <div className="box" style={DivStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <p>Coding Beauty</p>
        </div>
        </>
    )
}