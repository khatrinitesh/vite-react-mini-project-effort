import React,{useCallback, useLayoutEffect, useMemo, useState} from 'react';
import Banner from '../components/banner';
import { useParams } from 'react-router-dom';
import styles from '../modulesstyling/1.module.css';

export default function About() {

  const [value,setValue] = useState('Nitesh Khatri')
  const [count1,setCount1] = useState(0);
  const [count2,setCount2] = useState(0);

  let {fname,lname} = useParams();

  const btnInc = useCallback(() => {
    setCount(count => count + 1)
  })

  const CalcOne = (a,b) => {
    return parseInt(a) + parseInt(b)
  }
  const CalcTwo = (a,b) => {
    return parseInt(a) - parseInt(b)
  }

  const addCalc = useMemo(() => {
    return CalcOne(count1,count2)
  },[count1,count2])

  const addCalc2 = useMemo(() => {
    return CalcTwo(count1,count2)
  },[count1,count2])

  useLayoutEffect(() => {
    if(value !== 'Sameet Khatri'){
      setValue('Nitesh Khatri')
    }
    else{
      console.log('UseLayoutEffect is called with the value of ', value);
    }
  },[value])

  const handleChange = useCallback((e) => {
    setCount1(e.target.value)
  })
  const handleChange2 = useCallback((e) => {
    setCount2(e.target.value)
  })
  return (
    <div className='content'>
      <Banner bannerTitle="About" bannerDesc="Amet in incididunt tempor veniam sint anim laborum reprehenderit consectetur minim velit qui. Pariatur tempor qui mollit ipsum occaecat nostrud consequat Lorem anim dolore excepteur. Adipisicing magna quis culpa nisi."/>
      <h3 className={styles.headingtitle}> Now showing post {fname} {lname}</h3>
      {value}
      <hr/>
      <h2>Counter</h2>
      {count1}
      <button onClick={btnInc}>+</button>
      <hr/>
      <input type="text" value={count1} onChange={handleChange}/>
      <input type="text" value={count2} onChange={handleChange2}/>
      <br/>
      {addCalc}
      <br/>
      {addCalc2}
      <p className={styles.desc}>Elit ex ullamco amet occaecat magna velit nulla ipsum laborum labore minim. Id nisi sit consectetur ipsum nisi officia consequat in est. Non incididunt non magna nisi eiusmod do incididunt cillum. Ullamco nisi ex eiusmod cillum et occaecat.</p>
      <button className="Button Button--disabled">Processing...</button>
    </div>
  )
}
