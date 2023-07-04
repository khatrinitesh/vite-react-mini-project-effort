import React,{ useState } from 'react'

export default function StateLess(){
    return (
        <div>
            <ClockOne/>
            {/* <Clock/> */}
        </div>
    )
}

function Clock(){
    const [date,setDate] = useState(new Date().toDateString());
    return(
        <>
        {date}
        </>
    )
}

class ClockOne extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            date:new Date().toDateString(),
            pigeons:[]
        }
        setInterval(() => this.setTime(),1000)
    }
    render(){
        return(
            <>
             {this.state.date}
             <ul>
                {this.state.pigeons.map((val) => {
                    return(
                        <li key={val.id}>
                            <h3>{val}</h3>
                        </li>
                    )
                })}
             </ul>
            </>
        )
    }
}