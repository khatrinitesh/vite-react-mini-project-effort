import React from 'react';
import Banner from '../components/banner';
import { Outlet,useParams  } from 'react-router-dom';

export default function Blog() {
    const {routeParams} = useParams();
  return (
    <div className='content'>
      <Banner bannerTitle="Blog" bannerDesc="Lorem Ipsum"/>
      {routeParams}
      <div className='inner_blog'>
        <Outlet/>
      </div>
    </div>
  )
}
