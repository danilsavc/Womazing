import React from 'react';

import style from './AdressUser.module.css'

const AdressUser = () => {
  return (
    <form action="" className={style.form}>
      <h1 className={style.title}>Адреса отримувача</h1>
      <div className={style.inputs}>
        <input className={style.input} type="text" placeholder="Країна" />
        <input className={style.input} type="text" placeholder="Місто" />
        <input className={style.input} type="text" placeholder="Вулиця"/>
        <input className={style.input} type="text" placeholder="Будинок"/>
        <input className={style.input} type="text" placeholder="Квартира"/>
      </div>
    </form>
  );
};

export default AdressUser;