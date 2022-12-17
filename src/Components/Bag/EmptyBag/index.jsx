import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './EmptyBag.module.css'

const EmptyBag = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1 className={style.title}>Кошик порожній</h1>
        <p className={style.text1}>Скоріш за все, вы не додали до кошика одяг</p>
        <p className={style.text2}>Для того, щоб додати одяг, перейдіть до магазину</p>
        <NavLink to='/shop'><div className={style.btn}>Повернутися до магазину</div></NavLink>
      </div>
    </div>
    
  );
};

export default EmptyBag;