import React, {useState} from 'react'

export default function CustomApp() {

    const initialState = [
        {id: 1, country: 'Austria'},
        {id: 2, country: 'Belgium'},
        {id: 3, country: 'Canada'},
      ];

      const [data, setData] = useState(initialState);

      const updateState= () => {
        const newData = data.map(obj => {
            if(obj.id === 2){
                return {...obj,country:'Denmark'}
            }
            return obj;
        });
        setData(newData)
      }
  return (
    <div>
    <button onClick={updateState}>Update state</button>
      {data.map((val) => {
        return(
            <div key={val.id}>
                {val.country}
            </div>
        )
      })}
    </div>
  )
}
