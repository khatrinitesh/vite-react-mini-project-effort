import React, { useEffect } from 'react'

export default function CustomApp() {

    useEffect(() => {
        (async () => {
            try{
                const result = await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(result.data)
            }
            catch(error){
                console.log(error)
            }
        })
    });
  return (
    <div>
      
    </div>
  )
}
