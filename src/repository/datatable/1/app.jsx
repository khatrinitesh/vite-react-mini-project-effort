import React,{useState,useEffect} from 'react'

export default function CustomApp() {

    const [tableData, setTableData] = useState([])


    useEffect(() => {
        const fetchData = () => {
            fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => setTableData(data))
        }
        fetchData()
    },[])


    const onChangeCheckBoxEvent=(e, index)=>{
        // console.log(e, index)
        let res = [...tableData]
        res[index].completed = e.target
        setTableData(res)
    }

    const btnSortTitle = () => {
        const sortData = [...tableData].sort((a,b) => {
            return a.title > b.title ? 1 : -1
        })
        setTableData(sortData)
    }

    const btnSortID = () => {
        const sortData = [...tableData].sort((a,b) => {
            return a.id > b.id ? -1 : 1
        })
        setTableData(sortData)
    }

  return (
    <div>
      <table>
        <thead>
            <th onClick={btnSortID}>Id</th>
            <th onClick={btnSortTitle}>Title</th>
            <th>Status</th>
        </thead>
        <tbody>
            {tableData.map((item,index) => {
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                            <input type="checkbox" checked={item.completed} onChange={(e) => onChangeCheckBoxEvent(e,index)}/>
                        </td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  )
}
