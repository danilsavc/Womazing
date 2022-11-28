import React from 'react';
import style from "../Carousel/Carousel.module.css";
const CarouselItem = ({slide, index}) => {
  return (
    <div key={index} className={style.caruselItem}>
      <h1 className={style.title}>{slide.title}</h1>
      <span className={style.subtitle}>{slide.subtitle}</span>
		</div>
  );
};

export default CarouselItem;