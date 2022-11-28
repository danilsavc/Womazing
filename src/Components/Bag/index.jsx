import React from 'react';

import style from './Bag.module.css'

const Bag = () => {
  return (
    <div className={style.bag}>
      <h1 className={style.title}>Магазин</h1>
      <div className={style.subtitle}>
        <span className={style.main}>Головна - </span> 
        <span className={style.minor}>Магазин</span>
      </div>
              
      <div className={style.bag_container}>
        <div className={style.infoBar}>
          <span className={style.item}>Товар</span>
          <span className={style.price}>Ціна</span>
          <span className={style.amount}>Кількість</span>
          <span className={style.all}>Усього</span>
        </div>

        <div className={style.good}>
          <div className={style.good_item}>
            <div className={style.cancel}></div>
            <div className={style.img}></div>
            <div className={style.good_name}>Пальто</div>
          </div>
          
          <span className={style.good_price}>129</span>
          <div className={style.good_amount}><span>1</span></div>
          <span className={style.good_all}>129</span>
        </div>
      </div>
    </div>
  );
};

export default Bag;