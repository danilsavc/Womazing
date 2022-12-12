import React from 'react';

import style from './DataUser.module.css'

const DataUser = () => {
  return (
    <form action="" className={style.form}>
      <h1 className={style.title}>Дані покупця</h1>
      <div className={style.inputs}>
        <input className={style.input} type="text" placeholder="Ім'я" />
        <input className={style.input} type="emai" placeholder="E-mail" />
        <input className={style.input} type="text" placeholder="Телефон"/>
      </div>
    </form>
  );
};

export default DataUser;