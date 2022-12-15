import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Bag.module.css'

import BagItem from './BagItem';

const Bag = () => {
  return (
    <div className={style.bag}>
      <h1 className={style.title}>Корзина</h1>
      <div className={style.subtitle}>
        <NavLink to='/'><span className={style.main}>Головна - </span></NavLink> 
        <span className={style.minor}>Корзина</span>
      </div>
              
      <div className={style.bag_container}>
        <div className={style.infoBar}>
          <span className={style.item}>Товар</span>
          <span className={style.item}>Розмір</span>
          <span className={style.price}>Ціна</span>
          <span className={style.amount}>Кількість</span>
          <span className={style.all}>Усього</span>
        </div>

        <BagItem/>
        <BagItem/>
        <BagItem/>
        <BagItem/>
      </div>
      <div className={style.order}>
        <div className={style.total}><span>Всього: $ 129</span></div>
        <NavLink to='/bag/order'><div className={style.orderBtn}><span>Оформити замовлення</span></div></NavLink>
      </div>
    </div>
  );
};

export default Bag;