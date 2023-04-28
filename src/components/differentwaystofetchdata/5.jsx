import React,{useEffect} from 'react'

export default function FetchDataExample() {

    

    async function fetchUsers(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/11adasds')
        if(!response.ok){
            throw new Error('failed to fetch');
        }
        console.log(response != 200 ? 'yes' : 'no')
        return response.json();
    }
    

    useEffect(() => {
        fetchUsers()
        console.log(fetchUsers());
    },[])
  return (
    <div>
      
    </div>
  )
}
