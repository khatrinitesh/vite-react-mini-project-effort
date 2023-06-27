import React ,{ useState }from 'react'

export default function CustomApp() {

    const [on,setOn] = useState(true)
    const handleToggle = () => {
        setOn(o => !o)
    }
  return (
    <div>
      <Example on={on} onToggle={handleToggle}/>
    </div>
  )
}

function Example({on,onToggle}){

    
    return(
        <>
        <div>The button is on {on ? 'on' :'off'}</div>
        <button onClick={onToggle}>{on ? 'on' : 'off'}</button>
        </>
    )
}