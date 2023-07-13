import React,{ useState }  from 'react'

const employees = [
  {id: 1, name: 'Alice', country: 'Austria'},
  {id: 2, name: 'Bobby Hadz', country: 'Belgium'},
  {id: 3, name: 'Carl', country: 'Canada'},
];

export default function About() {
  const [list,setList] = useState(employees);

 
  const handleRemove = id => {
    setList(oldValues => {
      return oldValues.filter((val) => val.id !== id)
    })
  }

  const obj = {
    id: 4,
    name: 'Dean',
    country: 'Denmark',
  };
  return (
    <div>
      About

      {list.map((val) => {
        return(
          <div key={val.id}>
            <h3>{val.name}</h3>
            <p>{val.country}</p>
            <button onClick={() => handleRemove(val.id)}>&times;</button>
          </div>
        )
      })}

      <h4>{JSON.stringify(list)}</h4>
    </div>
  )
}
