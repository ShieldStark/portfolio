import React, { useState } from 'react'
import { SliderData } from './SliderData'
import image1 from './icons/IMG-3641.jpg';
import image2 from './icons/IMG-3871.jpg';
import image3 from './icons/IMG-3875.jpg';
import image4 from './icons/IMG-3876.jpg';
import image5 from './icons/IMG-3724.jpg';
import image6 from './icons/IMG-3642.jpg';
import slide from './ImageSlider.css';


const ImageSlider = () => {
    // const [current,setCurrent]=useState(0)
    // const length=slide.length
  return (
    <>
    <div  className='slide'>
      <img className="mySlides" src={image1}  height="350"/>
      
      <img className="mySlides" src={image5}  height="350"/>
      <img className="mySlides" src={image3}  height="350"/>
      <img className="mySlides" src={image2}  height="350"/>
      <img className="mySlides" src={image4}  height="350"/>
      
      <img className="mySlides" src={image6}  height="350"/>
    </div>
    </>
  )
}

export default ImageSlider;