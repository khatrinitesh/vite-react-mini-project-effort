import React,{useState} from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
export default function CardExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    
    const arrayOfObjects = [
        { coffee: "Americano", size: "Medium" },
        { coffee: "Espresso", size: "Single" },
      ];

      const arrayOfObjectsNew = [
        { coffee: "Americano", size: "Medium" },
        { coffee: "Espresso", size: "Single" },
      ];

      const [user,setUser] = useState(arrayOfObjects)

      const deleteByValue = value => {
        setUser(oldValues => {
            return oldValues.filter(user => user !== value)
        })
      }
    return(
        <>
        {arrayOfObjectsNew.map(({coffee,size}) => {
            return(
                <div>
                    {coffee} + {size}
                </div>
            )
        })}
        <hr/>
        <div className="container">
            <div className='row'>
                    {user.map((val) => {
                        return(
                            <div className='col-3'>
                                <div className="card p-4">
                                    {val.coffee} - {val.size} 
                                    <button className="btn btn-primary" onClick={() => deleteByValue(val)}>Remove</button>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
        </>
    )
}

