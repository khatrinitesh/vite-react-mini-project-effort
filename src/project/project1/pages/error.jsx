import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

  const nav = useNavigate();

  const btnBack = () => {
    nav('/')
  }
  return (
    <div className='error_content'>
      <Banner   bannerTitle="Oops" bannerDesc="We couldn't find the page you were looking for. Here'san adorable kitten instead!"/>
      <button onClick={btnBack} className='btn btn-danger'>Go Back</button>
    </div>
  )
}
