import style from '../Carousel/DreamCarousel.module.css'

const DreamCarouselItem = ({slide}) => {
  return (
    <div className={style.carouselItem}>
      <img className={style.img} src={slide.img} alt=''/>
    </div>
  );
};

export default DreamCarouselItem;