import React from 'react';

import style from '../Carousel/DreamCarousel.module.css'

import DreamCarouselIndicator from './DreamCarouselIndicator';
import DreamCarouselItem from "./DreamCarouselItem";


const DreamCarousel = ({imgForCarousel}) => {

  const [currentSlide, setCurrentSlide] = React.useState(0)

  const SetSlideRight = () => {
    setCurrentSlide(currentSlide < imgForCarousel.length - 1 ? currentSlide + 1 : 0)
  }

  const SetSlideLeft = () => {
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1: imgForCarousel.length - 1)
  }

  return (
    <div className={style.slider}>
      <div className={style.button_left} onClick={SetSlideLeft}></div>
      <div className={style.carousel}>
        <div className={style.carouselInner} style={{transform: `translateX(${-currentSlide * 100}%)`}}>
          {imgForCarousel.map((slide, index) => (
            <DreamCarouselItem slide={slide} key={index}/>
          ))}
        </div>
        <DreamCarouselIndicator slide={imgForCarousel} currentIndex={currentSlide}/>
      </div>

      <div className={style.button_right} onClick={SetSlideRight}></div>
    </div>
    
  );
};

export default DreamCarousel;