import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/banner';

export default function Error() {

    const nav = useNavigate();

    const btnBack = () => {
        nav('/')
    }
  return (
    <div className='error_content'>
    <Banner bannerTitle="404 page not found" bannrDesc="Lorem ipsum is paragraph."/>
      <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
