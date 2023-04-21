import React, { useState,useEffect } from 'react'
import axios from 'axios';

export default function CustomApp(url) {

    const [isLoading,setIsLoading] = useState(false);
    const [apiData,setApiData] = useState([]);
    const [serverError,SetServerError] = useState('');

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
                const data = await response.json();
                setApiData(data)
                setIsLoading(false)
            }
            catch(error){
                SetServerError(error)
                setIsLoading(false)
            }
        }
        fetchData();
    },[url])
    if(isLoading){
        return(
          <div>Loadng...</div>
        )
      }
      if(serverError){
        return(
          <div>Error</div>
        )
      }
      return(
        <div>
          {apiData.map((val) => {
            return(
              <div>{val.tite}</div>
            )
          })}
        </div>
      )
}
