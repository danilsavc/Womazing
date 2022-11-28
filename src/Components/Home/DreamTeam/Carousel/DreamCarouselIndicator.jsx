import React from 'react';

import style from '../Carousel/DreamCarousel.module.css'

const DreamCarouselIndicator = ({slide, currentIndex}) => {
  return (
    <div className={style.carouselIndicator}>
      {slide.map((_, index) => (
        <button key={index} className={`${style.item} ${currentIndex === index ? `${style.active}` : ''}`}></button>
      ))}
    </div>
  );
};

export default DreamCarouselIndicator;