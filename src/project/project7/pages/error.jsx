import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }
  return (
    <div className='content'>
        <Banner bannertitle="Error" bannerdesc="404 page not found"/>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
