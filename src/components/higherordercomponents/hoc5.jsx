import React,{useState} from 'react';

export default function HOCUpdated(NewComponent) {
    function ChildComponent(){

        const [count,setCount] = useState(0);

        const btnInc = () => {
            setCount(prevCount => prevCount + 1)
        }
        const btnDec = () => {
            setCount(prevCount => prevCount - 1)
        }
        const btnRes = () => {
            setCount(0)
        }
        return(
            <>
                <NewComponent count={count} btnInc={btnInc} btnDec={btnDec} btnRes={btnRes}/>
            </>
        )
    }

    return ChildComponent
}
