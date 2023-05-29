import React from 'react';
import Banner from '../components/banner';
// import Conditional from '../components/conditional';
// import ContextApi from '../components/contextapi';
import PassingDataPC from '../components/passingdatafromparenttochild';
// import ChartExample from '../components/chart';
import JQueryCode from '../../../components/jquery';
import { useNavigate } from 'react-router-dom';


export default function Home({login}) {
  let navigate = useNavigate();
  return (
    <div>
      <Banner bannerTitle="Home" bannerDesc="Lorem Ipsum is paragraph"/>
      {/* <PassingDataPC/> */}
      {/* <JQueryCode/> */}
      <p>This is the Home Page</p>
      <button onClick={()=>{login();navigate('/dashboard')}}>
        Login
      </button>
    </div>
  )
}
