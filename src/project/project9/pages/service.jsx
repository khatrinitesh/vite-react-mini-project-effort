import { useEffect, useState } from "react";
import Banner from '../components/banner';
import { Newspaper } from "@mui/icons-material";

export default function Service() {

  const [newsPapers, setNewsPapers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setIsError] = useState('');

  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      try{
        const response = await fetch('https://chroniclingamerica.loc.gov/search/pages/results/?andtext=florid&format=json')
        const data = await response.json()
        setNewsPapers(data.items);
        setIsLoading(false)
      }
      catch(error){
        setIsError(error.message)
        setIsLoading(false)
      }
    }
    fetchData()
  },[])

  const btnDel  =(id) => {
    const newData = newsPapers.filter((val) => val.id !== id)
    setNewsPapers(newData)
  }

  if(isLoading){
    return(
      <div>Loading data...</div>
    )
  }
  if(error){
    return(
      <div>{error}</div>
    )
  }
  return (
    <div className='content'>
      <Banner bannerTitle="Service" bannerDesc="Amet in incididunt tempor veniam sint anim laborum reprehenderit consectetur minim velit qui. Pariatur tempor qui mollit ipsum occaecat nostrud consequat Lorem anim dolore excepteur. Adipisicing magna quis culpa nisi."/>
      {newsPapers.map((val) => {
        return(
          <div key={val.id}>
            <h3>{val.title}</h3>
            <p>{val.place_of_publication}</p>
            <button onClick={() => btnDel(val.id)}>&times;</button>
          </div>
        )
      })}
    </div>
  )
}
