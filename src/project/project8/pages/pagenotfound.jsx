import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function PageNotFound() {

  let backnavg = useNavigate();

  const btnBack = () => {
    backnavg('/')
  }
  return (
    <div className='error_content'>
      <Banner title="Page not found" desc="Lorem Ipsum"/>
      <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
