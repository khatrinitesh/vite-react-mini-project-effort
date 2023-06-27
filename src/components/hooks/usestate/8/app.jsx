import React, { useState } from 'react'

export default function CustomApp() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleFormSubmit  = (e) => {
        e.preventDefault();
        if (!username || !password) {
            console.log(`Please enter a username and password!`);
        }
    }


  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            Username:
            <input type="text"  value={username} onChange={(e) => setUsername(e.target.value)} required/>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <button type='submit'>Submit</button>
        </form>
        <Example/>
    </div>
  )
}

const Example = () => {
    return(
        <>
         <Select options={[{key:'oliver',value:'oliver'},{key:'eve',value:'eve'}]}/>
        </>
    )
}

const Select = ({options}) => {
    const [selectedOption,setSelectedOption] = useState(null);
    return options.map(({key,value}) => {
        return(
            <option active={selectedOption === key} onClick={() => setSelectedOption(value)}>{key}</option>
        )
    })
}


