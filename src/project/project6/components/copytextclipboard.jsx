import React,{useState} from 'react';

export default function CopytextClipboard() {

    const [copyText, setCopyText] = useState('');

    const handleChange  =(e) => {
        e.preventDefault();
        setCopyText(e.target.value)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(copyText)
    }


  return (
    <div>
       <input type="text" value={copyText} onChange={handleChange}/>
       <button onClick={handleCopy}>
        Copy
       </button>
    </div>
  )
}
