import React, { useCallback } from 'react';
import Banner from '../components/banner';
// import UseCallbackExample from '../components/usecallback';
// import UseEffectExample from '../../../components/hooks/useEffect/1';
// import UseMemoExample from '../../project6/components/usememo';
import CrudExample from '../../../repository/crud/1';

export default function About() {
  return (
    <div className='content'>
        <Banner bannertitle="About" bannerdesc="Lorem Ipsum"/>
        {/* <UseCallbackExample/> */}
        {/* <UseEffectExample/>
        <UseMemoExample/> */}
        <CrudExample/>
    </div>
  )
}
