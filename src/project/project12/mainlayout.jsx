import React from 'react';
import { Outlet } from 'react-router-dom';

// BELOW SOME COMPONENTS
import Header from './components/header';
import Footer from './components/footer';

export default function MainLayout() {
  return (
    <>
      <Header/>
       <div className='main_content'>
        <Outlet/>
       </div>
      <Footer/> 
    </>
  )
}
