import React from 'react'

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

function Example(){
    const initialState = [
        {id: 1, name: 'Alice', country: 'Austria'},
        {id: 2, name: 'Bob', country: 'Belgium'},
      ];
      const [employees, setEmployees] = React.useState(initialState);

        // ✅ Update one or more objects in a state array
      const updateObject  = () => {
        setEmployees(current => current.map(obj => {
            if(obj.id === 2){
                return {...obj,name:'sameet',country:'usa'}
            }
            return obj
        }))
      }


    // ✅ Remove one or more objects from state array
      const updateDelete = () => {
        setEmployees(current => current.filter(obj => {return obj.id == 2}))
      }


      // ✅ Add an object to a state array
      const updateAdd = (obj) => {
        setEmployees(current => [...current,obj])
      }

      updateAdd({
        id: 3,
        name: 'Carl',
        country: 'Canada',
      })


    return(
        <>
        <button onClick={updateAdd}>add</button>
        <button onClick={updateObject}>Update</button>
        <button onClick={updateDelete}>Delete</button>
         {employees.map((val) => {
            return(
                <div key={val.id}>
                    <h3>{val.name}</h3>

                </div>
            )
         })}
        </>
    )
}