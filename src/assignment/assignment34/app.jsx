import React from 'react'

export default function CustomApp() {
  return (
    <div>
      <Example/>
    </div>
  )
}

const colors = [
    {value: 'red',    text: 'Red'   },
    {value: 'yellow', text: 'Yellow'},
    {value: 'blue',   text: 'Blue'  }
];

function Example(){
    const [color, setColor] = React.useState('red');

    const handleChange = e => {
        e.preventDefault();
        setColor(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            color:color
        };
        const json = JSON.stringify(data);
        console.clear();
        console.log(json);
    }
    return(
        <>
          <form onSubmit={handleSubmit}>
            <div>
            <label>
                Choose your favorite color:
                <select value={color} onChange={handleChange}>
                    {colors.map(item => {
                        return (<option key={item.value} value={item.value}>{item.text}</option>);
                    })}
                </select>
                {color}
            </label>
            </div>
            <button type='submit'>Submit</button>
        </form>
        
        </>
    )
}