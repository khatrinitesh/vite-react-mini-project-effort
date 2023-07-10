import React from 'react';
import Swiper from 'react-id-swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SlideShow() {

  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  return (
    <div>
      <Swiper {...params}>
        <div>Slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
      </Swiper>
    </div>
  )
}
