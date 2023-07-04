import { truncate } from 'lodash';
import React,{ useState } from 'react' 

export default function CustomApp() {
    const [count,setCount] = useState(0);

    function clickHande(){
      setCount(count => count + 1)
    }
  return (
    <div>
      <Button disabled={false} label={count} onClick={clickHande}/>
    </div>
  )
}

const Button = ({label,onClick,disabled}) => {
  return(
    <>
     <button onClick={onClick} disabled={disabled}>{label}</button>
    </>
  )
}

