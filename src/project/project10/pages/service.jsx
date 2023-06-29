import React, { useEffect, useState } from "react"
import Banner from '../components/banner';
import DataOne from "../components/data1";

export default function Service() {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  }

  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className='content'>
      <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum"/>
      <DataOne/>
      {users && users.length > 0 ? users.map((val) => {
        return(
          <div key={val.id}><h3>{val.name}</h3></div>
        )
      }) : 'there is no data content'}
    </div>
  )
}
