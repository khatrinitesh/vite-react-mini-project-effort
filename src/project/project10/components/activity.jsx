import React,{ useState, useEffect } from "react";

export default function Activity() {

    const [activity, setActivity] = useState([]);
    const url = 'https://www.boredapi.com/api/activity'

    
  const getActivity = async () => {
    for(let i=0;i<10;i++){
      let response = await fetch(url)
      let result = await response.json()
      setActivity(prev => [...prev,result])
    }
  }
  useEffect(() => {
    getActivity()
  },[])
  return (
    <>
    {activity}
    </>
  )
}
