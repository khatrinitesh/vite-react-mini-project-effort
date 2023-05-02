import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './custom.scss';

export default function SlideshowExample() {
  return (
    <>
      <Example/>
    </>
  )
}


function Example(){

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    centerMode:true,
    centerPadding:'50px',
    draggable:true,
    fade:true,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const number = [11,12,13,4,5,6,7]
  
    return(
        <>
         <h2> Single Item</h2>
          <Slider {...settings}>
            {number.map((val) => {
              return(
                <div className='section_box'>{val}</div>
              )
            })}
          </Slider>
        </>
    )
}