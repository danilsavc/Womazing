import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import style from './Bag.module.css'

import BagItem from './BagItem';
import EmptyBag from './EmptyBag';

const Bag = () => {
  const items = useSelector((state) => state.bag.items)

  const {totalPrice} = useSelector(state => state.bag)

  if(!totalPrice) {
    return <EmptyBag />
  }

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

        {items.map((item, index) => <BagItem key={index} {...item} />)}
      </div>
      <div className={style.order}>
        <div className={style.total}><span>Всього: $ {totalPrice}</span></div>
        <NavLink to='/bag/order'><div className={style.orderBtn}><span>Оформити замовлення</span></div></NavLink>
      </div>
    </div>
  );
};

export default Bag;