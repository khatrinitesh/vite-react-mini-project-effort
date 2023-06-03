import React,{useState} from 'react';
import {Card,CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function Cards(){

    const [state, setState] = useState({
        name: 'Rajdeep', 
        love: 'coding',
        earn: null 
     })
    return(
        
        <>

            <h3>CardName</h3>
            <Link to={`/read/${state.name}/${state.love}/${state.earn}`}>Your code goes here </Link>
        </>
    )
}


