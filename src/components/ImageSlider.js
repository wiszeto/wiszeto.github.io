import React, { useState } from 'react';
import { SliderData } from './SliderData';
import "../css/imageslider.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    
    <div className='imgslider'>
      {SliderData.map((slide, index) => {
        return (
        <>
          <i class="fa-sharp fa-solid fa-chevron-left imgleft-arrow" onClick={prevSlide}></i>
          <div className={index === current ? 'slide active' : 'imgslide'} key={index}>
            {index === current && (
              <img src={slide.image} alt='travel image' className='sliderimage' />
              
            )}
          </div>
          <i class="fa-sharp fa-solid fa-chevron-right imgright-arrow" onClick={nextSlide}></i>
        </>
        );
      })}
    </div>
  );
};

export default ImageSlider;