import React,{useState} from 'react'

export default function CustomApp() {
    const [val, setVal] = useState("");
    const [list, setlist] = useState(['Orange', 'Apple', 'Banana', 'Mango', 'Cherry'])
    const [list1, setList1] = useState(list)

    const filterEvent  = e => {
        setVal(e.target.value)
        if(e.target.value){
            let result = list1.filter((item) => item.toLowerCase().includes(e.target.value.toLowerCase()))
            setlist(result)
        }
        if(e.target.value === ''){
            setList(list1)
        }
    }
  return (
    <div>
       <input value={val} onChange={(e)=>filterEvent(e)}/>
        {
          list.map((item)=>{
            return(
              <div>{item}</div>
            )
          })
        }
    </div>
  )
}
