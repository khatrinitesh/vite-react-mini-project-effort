
import { CurrencyExchangeTwoTone } from '@mui/icons-material';
import React,{useState} from 'react'

export default function CustomApp() {

    const initialState = [
        {id: 1, name:'a',country: 'Austria'},
        {id: 2, name:'b',country: 'Belgium'},
        {id: 3, name:'c',country: 'Canada'},
      ];
      const [data, setData] = useState(initialState);

    //   function updateState(){
    //    const newState = data.map((obj) => {
    //     if(obj.id === 2){
    //         return {...obj,country:'Denmark'}
    //     }
    //     return obj;
    //    });
    //    setData(newState)
    //   }

    // function updateState(){
    //     setData(prevState => {
    //         const newState = prevState.map((obj) => {
    //             if(obj.id === 2){
    //                 return {...obj,country:'Denmark'}
    //             }
    //             return obj;
    //         })
    //         return newState;
    //     })
    // }

    function updateState(){
        setData(prevState => {
            const newState = prevState.map((obj) => {
                if(obj.id===2){
                    return {...obj,name:'nitesh',country:"denmark"}
                }
                return obj;
            });
            return newState
        })
        
    }

    const addObjectToArray = obj => {
        setData(current => [...current,obj])
    }
    
    const btnRemove  = (id) => {
        const newData = data.filter((val) => val.id !== id)
        setData(newData)
    }
  return (
    <div>
        <button
        onClick={() =>addObjectToArray({id:Math.random(),name:'sachin',country:'india'})}
      >Add employee</button>
        <button onClick={updateState}>Update state</button>
       {data.map(obj => {
        return (
          <div key={obj.id}>
            <h2>id: {obj.id}</h2>
            <h2>name: {obj.name}</h2>
            <h2>country: {obj.country}</h2>
            <button onClick={() => btnRemove(obj.id)}>&times;</button>
            <hr />
          </div>
        );
      })}
    </div>
  )
}
