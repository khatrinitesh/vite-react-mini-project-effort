import React, { useState,useCallback }  from 'react';

export default function UseCallBackCustom() {

    const [name, setName] = useState('');
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [val1,setVal1] = useState(0)
    const [val2,setVal2] = useState(0)
    const ans = useCallback(() => {
        adder(num1, num2);
    }, [val1, val2]);

    const adder = (a1, a2) => {
        console.log('Adding numbers');
        return parseInt(a1) + parseInt(a2);
     };

  return (
    <div>
        <h2>UseCallBack</h2>
      <input type="text" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
      <input value={num1} onChange={(e) => setNum1(e.target.value)}/>
      <input value={num2} onChange={(e) => setNum2(e.target.value)}/>
        {adder}
    </div>
  )
}
