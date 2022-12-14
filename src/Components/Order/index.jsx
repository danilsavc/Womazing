import React from 'react';
import { NavLink } from 'react-router-dom';

import AdressUser from './adressUser';
import DataUser from './dataUser';

import style from "./Order.module.css"
import Payment from './Payment';

const Order = () => {
  return (
    <div className={style.order}>
      <h1 className={style.title}>Оформлення замовлення</h1>
      <div className={style.subtitle}>
        <NavLink to='/'><span className={style.main}>Головна - </span></NavLink> 
        <span className={style.minor}>Оформлення замовлення</span>
      </div>

      <div className={style.content}>
        <div className={style.dataUser}>
          <DataUser />
        </div>
        <div className={style.adressUser}>
          <AdressUser />
        </div>
        <div className={style.payment}>
          <Payment />
        </div>
      </div>
    </div>
  );
};

export default Order;