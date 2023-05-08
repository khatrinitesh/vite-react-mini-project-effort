import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.css";

export default function CustomFetchExample() {
  return (
    <>
      <Example/>
    </>
  )
}


function Example(){
    const [ user,setUser] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const fetchData = async() => {
        setLoading(true)
        try{
            const res = await fetch('https://api.fda.gov/drug/event.json?limit=1')
            if(!res.ok){
                throw new Error('sorry something went wrong')
            }
            const result = await res.json() 
            setUser(result.results)
            console.log(result.results)
            setLoading(false)
        }
        catch(error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const btnRemove = (id) => {
        user.splice(id,1)
        setUser([...user])
    }

    if(loading){
        return(
            <div>{loading}</div>
        )
    }
    if(error){
        return(
            <div>{error.message}</div>
        )
    }
    return(
        <>
        <div className='container'>
            <div className='row'>
                {user.map((val,index) => {
                        return(
                            <div key={index} className='card p-4 mb-3'>
                                {/* <h3>Description - {val.Description}</h3>
                                <h4>Auth - {val.Auth}</h4>
                                <p>HTTPS - {val.HTTPS}</p>
                                <p>Cors - {val.Cors}</p>
                                <p>Link - {val.Link}</p>
                                <p>Category - {val.Category}</p> */}
                                {/* <h3>{val.localName}</h3>
                                <p>{val.name}</p>
                                <p>{val.countryCode}</p>
                                <p>{val.type}</p> */}
                                {/* <h3>{val.ability.name}</h3>
                                <span>{val.slot} - {val.ability.url}</span>
                                <a href="{val.ability.url}">url</a> */}
                                {/* <span>{val.symbol}</span>
                                <span>{val.baseAsset}</span>
                                <span>{val.volume}</span>
                                <span>{val.symbol}</span>
                                <span>{val.bidPrice}</span> */}
                                {/* <span>{val.category}</span>
                                <span>{val.correct_answer}</span>
                                <span>{val.difficulty}</span>
                                <span>{val.incorrect_answers}</span>
                                <span>{val.question}</span>
                                <span>{val.type}</span> */}
                                {/* <span>{val.continent_code}</span>
                                <span>{val.region}</span>
                                <span>{val.ip}</span>
                                <span>{val.longitude}</span>
                                <span>{val.accruacy}</span>
                                <span>{val.latitude}</span>
                                <span>{val.city}</span>
                                <span>{val.asn}</span>
                                <span>{val.organization}</span>
                                <span>{val.country}</span>
                                <span>{val.timezone}</span>
                                <span>{val.area_code}</span>
                                <span>{val.organization_name}</span>
                                <span>{val.country_code}</span>
                                <span>{val.country_code3}</span> */}
                                {/* <span>{val.number}</span>
                                <span>{val.language}</span>
                                <span>{val.insult}</span>
                                <span>{val.created}</span>
                                <span>{val.shown}</span>
                                <span>{val.createdby}</span>
                                <span>{val.active}</span>
                                <span>{val.comment}</span> */}
                                {/* <span>{val.country}</span>
                                <span>{val.state}</span>
                                <span>{val.city}</span> */}
                                <span>{val.code}</span>
                                {/* <span>{val.iso2code}</span>
                                <span>{val.name}</span>
                                <span>{val.id}</span> */}
                                <span>{val.safetyreportid}</span>
                                <span>{val.fulfillexpeditecriteria}</span>
                                <span>{val.primarysource.qualification}</span>
                                <span>{val.sender.senderorganization}</span>
                                <button onClick={() => btnRemove(val.id)}>&times;</button>
                                </div>
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}
