import React from 'react';
import Banner from '../components/banner';
import Conditional from '../components/conditional';

export default function Home() {
  return (
    <div>
      <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum is paragraph"/>
      <Conditional/>
    </div>
  )
}
