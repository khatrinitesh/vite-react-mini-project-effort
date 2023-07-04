import { CabinSharp } from '@mui/icons-material';
import React from 'react'

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

function Example(){

    const employees = [
        {id: 4, name: 'Dean', country: 'Denmark'},
        {id: 3, name: 'Carl', country: 'Canada'},
        {id: 2, name: 'Bob', country: 'Belgium'},
        {id: 1, name: 'Alice', country: 'Austria'},
        {id: 5, name: 'Ethan', country: 'Egypt'},
      ];

    // 👇️ sort by Numeric property ASCENDING (1 - 100)
    const numAsc = [...employees].sort((a,b) => a.id - b.id);
    console.log(numAsc)

    // 👇️ sort by Numeric property DESCENDING (100 - 1)
    const sortDes = [...employees].sort((a,b) => {
        if(a.name>b.name){
            return -1
        }
        else{
            return 1
        }
    })
    console.log('sort descending',sortDes)

    // 👇️ sort by Numeric property ASCENDING (1 - 100)
    const sortAsc = [...employees].sort((a,b) => {
        if(a.name<b.name){
            return -1
        }
        else{
            return 1
        }
    })
    console.log('sort ascending',sortAsc)


    return(
        <>
         {/* {numAsc.map((val) => {
            return(
                <div key={val.id}>
                    <h3>{val.name}</h3>
                </div>
            )
         })} */}

         {[...employees].sort((a,b) => a-b).map(emp => {
            return(
                <div key={emp.id}>{emp.name} {emp.country}</div>
            )
         })}
        </>
    )
}