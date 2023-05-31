import React,{useState,useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from '../styling/scrollbacktop';

export default function ScrollBacktop() {

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 100){
        setVisible(true)
      } 
      else if (scrolled <= 100){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

    
    window.addEventListener('scroll', toggleVisible);
  return (
    <>
      {/* 👇️ scroll to top on button click */}
      <Button>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </Button>
    </>
  )
}
