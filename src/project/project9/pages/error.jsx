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
      <Banner bannerTitle="Error" bannerDesc="Amet in incididunt tempor veniam sint anim laborum reprehenderit consectetur minim velit qui. Pariatur tempor qui mollit ipsum occaecat nostrud consequat Lorem anim dolore excepteur. Adipisicing magna quis culpa nisi."/>
      <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
