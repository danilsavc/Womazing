import React from 'react';
import CarouselItem from './CarouselItem';
import styles from "../Carousel/Carousel.module.css";

const Carousel = ({text}) => {

  const [currentSlide, setCurrentSlide] = React.useState(0)

  React.useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(currentSlide => currentSlide < 3 - 1 ? currentSlide + 1 : 0)
    }, 5000)
    return () => clearInterval(slideInterval)
  }, [])

  return (
      <div className={styles.carousel}>
        <div 
        className={styles.carouselInner}
        style={{transform: `translateY(${-currentSlide * 33.3}%)`}}
        >
          {text.map((slide, index) => (
            <CarouselItem slide={slide} key={index}/>
          ))}
        </div>
			</div>
  );
};

export default Carousel;