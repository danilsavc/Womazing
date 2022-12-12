import React from 'react';

import style from './OneItem.module.css'

import girl from '../../Assets/Img/header_girl1.png'
import Sizes from './Sizes';

const OneItem = () => {
  const [size, setSize] = React.useState(0)

  const onChangeSize = (index) => {
    setSize(index)
  }


  return (
    <div className={style.OneItem}>
      <h1 className={style.title}>Світшот</h1>
      <div className={style.subtitle}>
        <span className={style.main}>Головна - </span> 
        <span className={style.minor}>Магазин</span>
      </div>
      <div className={style.item}>
        <img className={style.img} src={girl} alt="item" />
        <span className={style.price}>$ 129</span>
        <div className={style.sizes}>
          <Sizes value={size} onChangeSize={onChangeSize}/>
        </div>
        <div className={style.btn}>
          <div className={style.addInBag}><span>Додати в кошик</span></div>
          <div className={style.countThings}>0</div>
        </div>
        
      </div>
    </div>
  );
};

export default OneItem;