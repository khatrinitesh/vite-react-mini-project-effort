import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function About() {

  const [active,setActive] = useState(true);

  const btnToggle= () => {
    setActive(!active);
  }
  return (
    <div className='content'>
        <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
        <button onClick={btnToggle} className={active ? 'btn btn-primary' : 'btn btn-success'}>{active ? 'btn btn-primary' : 'btn btn-success'}</button>
        {active ? 'nitesh' : 'sameet'}
    </div>
  )
}
