import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function FetchApi() {

    const [quote,setQuote] = useState({})

    useEffect(() => {
        axios.get('https://api.adviceslip.com/advice')
        .then(res => {
            console.log(res.data)
            setQuote(res.data.slip)
        })
        .catch(err=> {
            console.log(err)
        })
    })
  return (
    <div>
      {quote.advice}
    </div>
  )
}
