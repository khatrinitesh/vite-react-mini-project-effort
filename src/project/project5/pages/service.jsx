import React from 'react';
import Banner from '../components/banner';
import FetchData from '../components/fetchdata';

export default function Service() {
  return (
    <div>
      <Banner bannerTitle="Service" bannerDesc="Lorem Ipsum is paragraph"/>
      <FetchData/>
    </div>
  )
}
