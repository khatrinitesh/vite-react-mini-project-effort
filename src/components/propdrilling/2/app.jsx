import React,{useState} from 'react';
import Home from './home';

export default function CustomApp() {

    const [name,setName] = useState('nitesh');
    const [dataarr,setDataArr] = useState([]);

    const callEvent = (arr,obj) => {
        console.log('arrarr',arr,obj)
        setDataArr(arr)
    }
  return (
    <div>
      <Home data={name} event={callEvent}/>
      {
        dataarr || dataarr.length > 0 || dataarr != undefined || dataarr != undefined ? 
        dataarr.map((item,index) => {
            return(
                <div>{item}</div>
            )
        }) : ''
      }
    </div>
  )
}
