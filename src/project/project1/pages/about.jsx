import React from 'react';
import Banner from '../components/banner';
// import ToggleDarkLightThemeMode from '../../../components/toggledarklightthememode/1';
// import TimelineExample from '../../../components/timeline/1';
// import ToDoExample from '../../../components/todolist/2';
// import PassPropsComponentExample from '../../../components/pass-prop-component/1';
// import SectionSmoothScrolling from '../../../components/sectionsmoothscrolling/1';
// import EventHandler from '../../../components/eventhandler/1';
import HooksExample from '../../../components/hooks/1';

export default function About() {
  return (
    <div className='content'>
      <Banner bannerTitle="About" bannerDesc="Lorem Ipsum"/>
      <HooksExample/>
    </div>
  )
}
