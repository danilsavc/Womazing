import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './Payment.module.css'

const Payment = () => {
  return (
    <div className={style.payment}>
      <h1 className={style.title}>Спосіб оплати</h1>
      <div className={style.checbox}>
        <input className={style.customCheckBox} type="checkbox"/>
        <span className={style.text}>Оплата готівкою</span>
      </div>
      <NavLink to='/bag/order/order-success'><div className={style.btn}>Підтвердити замовлення</div></NavLink>
      
    </div>
  );
};

export default Payment;