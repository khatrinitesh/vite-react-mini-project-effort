import React,{useEffect} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './custom.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default function SlideshowExample() {

  
  return (
    <>
      <Example/>
    </>
  )
}

function Example(){

  useEffect(() => {
    options();
  },[])
  const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,
        }
    },
  };
  
  return(
    <>
    <OwlCarousel className="slider-items owl-carousel" {...options}>
        <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
        <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
        <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
        <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
        <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
        <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
        <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
        <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
        <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
        <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
        <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
        <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
    </OwlCarousel>
    </>
  )
}

const TestiMonialsDetails = ({testiMonialDetail}) => {
  const {name, address, description, img} = testiMonialDetail;
  console.log("testiMonialDetail"+testiMonialDetail)
  return (
      <div class="item">
          <div class="shadow-effect">
              <img class="img-circle" src={img} />
              <p>{description}</p>
          </div>
          <div class="testimonial-name">
              <h5>{name}</h5>
              <small>{address}</small>
          </div>
      </div>
  );
};


// function Example(){

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     autoplay:true,
//     centerMode:true,
//     centerPadding:'50px',
//     draggable:true,
//     fade:true,
//     slidesToShow: 3,
//     slidesToScroll: 1
//   };

//   const number = [11,12,13,4,5,6,7]
  
//     return(
//         <>
//          <h2> Single Item</h2>
//           <Slider {...settings}>
//             {number.map((val) => {
//               return(
//                 <div className='section_box'>{val}</div>
//               )
//             })}
//           </Slider>
//         </>
//     )
// }