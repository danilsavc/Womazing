import React from 'react';

import style from './Bag.module.css'

import BagItem from './BagItem';

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

        <BagItem/>
      </div>
      <div className={style.order}>
        <div className={style.total}><span>Всього:  $129</span></div>
        <div className={style.orderBtn}><span>Оформити замовлення</span></div>
      </div>
    </div>
  );
};

export default Bag;