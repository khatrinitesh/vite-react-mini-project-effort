import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import CopytextClipboard from '../components/copytextclipboard';
import Slideshow from '../components/slideshow';
import PropsDrilling from '../components/propsdrilling';
import UseMemo from '../components/usememo';
import UseCallBackCustom from '../components/usecallback';
import ListKey from '../components/listkey';

export default function About() {
  return (
    <div className='content'>
      <Banner title="About" paragraph="Lorem Ipsum"/>
      <CopytextClipboard/>
      <Slideshow/>
      <PropsDrilling/>
      <UseMemo/>
      <UseCallBackCustom/>
      <ListKey/>
    </div>
  )
}
