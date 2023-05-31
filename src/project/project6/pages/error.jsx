import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Home() {

    let navigate = useNavigate();

    const btnBack = () => {
        navigate('/');
    }
  return (
    <div className='content'>
      <Banner title="404 page not found" paragraph="Lorem Ipsum"/>
      <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
