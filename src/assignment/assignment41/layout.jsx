import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

export default function MainLayout() {
  return (
    <>
      <Navbar/>
      <div className='main_content'>
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}
