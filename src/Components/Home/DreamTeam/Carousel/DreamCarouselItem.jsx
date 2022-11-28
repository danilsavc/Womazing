import style from '../Carousel/DreamCarousel.module.css'

const DreamCarouselItem = ({slide}) => {
  return (
    <div className={style.carouselItem}>
      <img src={slide.img} alt=''/>
    </div>
  );
};

export default DreamCarouselItem;