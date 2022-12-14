import React from 'react';
import { NavLink } from 'react-router-dom';
import Map from '../Map';

import style from './Contacts.module.css'

const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.header}> 
        <h1 className={style.title}>Контакти</h1>
        <div className={style.subtitle}>
          <NavLink to='/'><span className={style.main}>Головна - </span></NavLink> 
          <span className={style.minor}>Контакти</span>
        </div>
      </div>

      <div className={style.map}><Map/></div>

      <div className={style.details}>
        <h1 className={style.telephone}>Телефон</h1>
        <h1 className={style.email}>E-mail</h1>
        <h1 className={style.adress}>Адреса</h1>
        <span className={style.telephone_item}>+380676767676</span>
        <span className={style.email_item}>danilsavc@gmail.com</span>
        <span className={style.adress_item}>м. Запоріжжя, вул. Сталеварів 11в</span>
      </div>

      <form action="" className={style.form}>
        <h1 className={style.title_form}>Напишить нам</h1>
        <div className={style.inputs}>
          <input className={style.input} type="text" placeholder="Ім'я" />
          <input className={style.input} type="emai" placeholder="E-mail" />
          <input className={style.input} type="text" placeholder="Телефон"/>
          <input className={style.input} type="text" placeholder="Повідомлення"/>
        </div>
        <button type='reset' className={style.btn}>Відправити</button>
      </form>

    </div>
  );
};

export default Contacts;