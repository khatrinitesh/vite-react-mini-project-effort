import React,{ useState } from 'react';

export default function HOCUpdated(NewComponent) {
    function ChildComponent(){
        const [name,setName] = useState('open')
        const [text,setText] = useState([])
    
        const btnToggle = () => {
            setName(`${text ? 'close' : 'open'}`)
            setText(!text)
        }
        return(
            <>
                <NewComponent name={name} btnToggle={btnToggle} text={text}/>
            </>
        )
    }

    return ChildComponent
}
