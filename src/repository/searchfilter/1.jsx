import React,{useState} from 'react'

export default function SearchFilterExample() {
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){
    const [searching, setSearching] =  useState('')

    const DataJson = [{
        "id": 1,
        "first_name": "Valentino",
        "last_name": "Kleiser",
        "email": "vkleiser0@earthlink.net",
        "gender": "Non-binary"
      }, {
        "id": 2,
        "first_name": "Burke",
        "last_name": "Beller",
        "email": "bbeller1@linkedin.com",
        "gender": "Bigender"
      }, {
        "id": 3,
        "first_name": "Humbert",
        "last_name": "Ronci",
        "email": "hronci2@addthis.com",
        "gender": "Genderqueer"
      }, {
        "id": 4,
        "first_name": "Kessiah",
        "last_name": "Eslie",
        "email": "keslie3@edublogs.org",
        "gender": "Non-binary"
      }, {
        "id": 5,
        "first_name": "Hillary",
        "last_name": "Merrydew",
        "email": "hmerrydew4@examiner.com",
        "gender": "Male"
      }, {
        "id": 6,
        "first_name": "Elinore",
        "last_name": "Bricksey",
        "email": "ebricksey5@toplist.cz",
        "gender": "Genderqueer"
      }, {
        "id": 7,
        "first_name": "Marybeth",
        "last_name": "Lanchbery",
        "email": "mlanchbery6@upenn.edu",
        "gender": "Genderfluid"
      }, {
        "id": 8,
        "first_name": "Kippar",
        "last_name": "Guerreiro",
        "email": "kguerreiro7@marketwatch.com",
        "gender": "Bigender"
      }, {
        "id": 9,
        "first_name": "Clay",
        "last_name": "Greenard",
        "email": "cgreenard8@mac.com",
        "gender": "Agender"
      }, {
        "id": 10,
        "first_name": "Mair",
        "last_name": "Ridewood",
        "email": "mridewood9@comcast.net",
        "gender": "Non-binary"
      }]
      
      
    return(
        <>
        <input type='text' value={searching} onChange={(e) => setSearching(e.target.value)}/>
        <ul>
        {DataJson.filter((val) => {
            if(searching === ''){
                return val
            }
            else if(val.first_name.toLocaleLowerCase().includes(searching.toLocaleLowerCase())){
                return val
            }
        }).map((val,id) => {
            return(
                <li key={id}>
                    <p>{val.first_name}</p>
                    <p>{val.last_name}</p>
                    <p>{val.email}</p>
                    <p>{val.gender}</p>
                </li>
            )
        })}
        </ul>
        </>
    )
}