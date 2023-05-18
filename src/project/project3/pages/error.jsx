import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';


export default function Error() {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/')
    }
  return (
    <div className='content'>
      <Banner bannerTitle="Error" bannerDesc="Deserunt adipisicing in voluptate exercitation eiusmod quis fugiat eiusmod laborum excepteur aliquip eu."/>
      <button className="btn btn-primary" onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
