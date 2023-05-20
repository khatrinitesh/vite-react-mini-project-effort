import React from 'react';
import Banner from '../components/banner';
// import UseDebounceExample from '../../../components/hooks/useDebounce/1';
import UseEffectExample from '../../../components/hooks/useEffect/1';


export default function About() {
  return (
    <div className='content'>
      <Banner bannerTitle="About" bannerDesc="Deserunt adipisicing in voluptate exercitation eiusmod quis fugiat eiusmod laborum excepteur aliquip eu."/>
      <UseEffectExample/>
    </div>
  )
}
