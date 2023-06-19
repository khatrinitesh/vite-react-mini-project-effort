import { template } from 'lodash'
import React,{useState,useEffect} from 'react'

const listExample = ["seema", "ram", "kamal", "aman", "kritika"]

export default function CustomApp() {

    const [tempList, setTempList] = useState([])
    const [data, setData] = useState(listExample)

    const fetchData = () => {
        fetch('https://dummyjson.com/users')
        .then((res) => res.json())
        .then((json) => setTempList(json.users))
        .catch(e => {console.log('error',e)})
    }

    useEffect(() => {
        fetchData()
    },[])

    const btnAsc = () => {
        let data = [...tempList]
        if(data.length > 0){
            let result = data.sort((a,b) => a.username.localeCompare(b.username))
            setTempList(result)
        }
    }
    const btnDsc = () => {
        let data = [...tempList]
        if(data.length > 0){
            let result = data.sort((a,b) => b.username.localeCompare(a.username))
            setTempList(result);
        }
    }
  return (
    <div>
      {tempList && tempList.length  > 0 && tempList != undefined ? tempList.map((item,i) => {
        return(
            <div>{item.username}</div>
        )
      }): "no data"}
      <div>

      <button onClick={btnAsc}>Ascending</button>
      <button onClick={btnDsc}>Descending</button>
      </div>
    </div>
  )
}


