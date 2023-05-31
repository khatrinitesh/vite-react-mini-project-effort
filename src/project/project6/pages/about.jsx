import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import CopytextClipboard from '../components/copytextclipboard';
import Slideshow from '../components/slideshow';

export default function About() {
  return (
    <div className='content'>
      <Banner title="About" paragraph="Lorem Ipsum"/>
      <CopytextClipboard/>
      <Slideshow/>
    </div>
  )
}
