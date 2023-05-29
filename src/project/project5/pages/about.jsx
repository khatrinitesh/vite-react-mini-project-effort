import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function About() {
  let navigate = useNavigate();
  return (
    <div>
      <Banner bannerTitle="About" bannerDesc="Lorem Ipsum is paragraph"/>
      <button onClick={()=> navigate("/", { state: "From the About Page"})}>Redirect</button>
    </div>
  )
}
