import React, { useState } from 'react'

export default function Container(NewComponent){
    function ChildComponent(){
        const [name,setName] = useState('nitesh')

        const btnChange = () => {
            setName('sameet')
        }
        return(
            <>
                <NewComponent name={name} btnChange={btnChange} />
            </>
        )
    }

    return ChildComponent
}
