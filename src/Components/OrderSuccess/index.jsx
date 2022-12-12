import React from 'react';

import style from './OrderSuccess.module.css'

import success from '../../Assets/Img/success.svg'
import { NavLink } from 'react-router-dom';

const OrderSucces = () => {
  return (
    <div className={style.content}>
      <h1 className={style.title}>Оформлення замовлення</h1>
      <div className={style.subtitle}>
        <span className={style.main}>Головна - Оформлення замовлення - </span> 
        <span className={style.minor}>Замовлення оформелене</span>
      </div>

      <div className={style.mainBlock}>
        <img className={style.img} src={success} alt="success" />
        <div className={style.text}>
          <h1 className={style.orderTitle}>Замовлення успішно оформлене</h1>
          <span className={style.orderSubtitle}>Ми зв'яжемось з вами найближчим часом</span>
        </div>
        <NavLink to='/'><div className={style.btn}><span>Перейти на головну</span></div></NavLink>
      </div>
    </div>
  );
};

export default OrderSucces;