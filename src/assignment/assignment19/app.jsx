import React from 'react'

export default function CustomApp() {
    const [count, setCount] = React.useState(0);

    const handleCount = () => {
        setCount(c => c + 1)
    }
  return (
    <div>
      <Button onClick={handleCount}>
        {count}
      </Button>
    </div>
  )
}

const Button = ({onClick,children}) => {
    return(
        <>
         <button onClick={onClick}>{children}</button>
        </>
    )
}