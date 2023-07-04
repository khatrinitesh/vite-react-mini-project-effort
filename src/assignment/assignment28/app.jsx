import React from 'react'

export default function CustomApp() {

    const initialState = [
        {id: 1, country: 'Austria'},
        {id: 2, country: 'Belgium'},
        {id: 3, country: 'Canada'},
      ];

      const [data, setData] = React.useState(initialState);


      const updateState =() => {
        setData(prevState => {
            const newState = prevState.map(obj => {
                if(obj.id === 2){
                    return {...obj,country:"Denmark"}
                }
                return obj;
            })
            return newState
        })
      }
  return (
    <div>
        <button onClick={updateState }>Delete</button>
      {data.map((val) => {
        return(
            <div key={val.id}>{val.country}</div>
        )
      })}
    </div>
  )
}
