import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import A from './a';

export const AppContext = createContext(null);

export default function Main() {

    const [name,setName] = useState('nitesh')
    const [count,setCount] = useState(0)
  return (
    <AppContext.Provider value={{name,setName,count,setCount}}>
      <A/>
    </AppContext.Provider>
  )
}
