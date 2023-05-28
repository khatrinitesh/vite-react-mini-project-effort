import React from 'react';
import Banner from '../components/banner';
// import Conditional from '../components/conditional';
// import ContextApi from '../components/contextapi';
import PassingDataPC from '../components/passingdatafromparenttochild';
// import ChartExample from '../components/chart';

export default function Home() {
  return (
    <div>
      <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum is paragraph"/>
      <PassingDataPC/>
    </div>
  )
}
