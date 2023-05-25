import React,{useState,useEffect,useRef} from 'react'

export default function CustomFormHooks() {
    const [name, setName] = useState('Ravi');
    const input = useRef();
   
    useEffect(() => {
        document.title = `Form validation`
      input.current.onkeyup = handleChange;
      input.current.value = name;
    });
     
    function handleChange(e) {
      e.preventDefault();
      setName(e.target.value);
    }
  return (
    <div>
      <div>
        Name:
        <input type='text' ref={input} />
      </div>
      <div>Name is: {name}</div>
    </div>
  )
}
