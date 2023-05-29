import React from 'react';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <div>
      <Banner bannerTitle="Contact" bannerDesc="Lorem Ipsum is paragraph"/>
      <Link to="/" state={'from contact page'}></Link>
    </div>
  )
}
