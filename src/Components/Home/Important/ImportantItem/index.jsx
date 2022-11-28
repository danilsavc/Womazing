import React from 'react';
import style from "../ImportantItem/ImportantItem.module.css";

const ImportantItem = ({img, title, subtitle}) => {
  return (
    <div className={style.item}>
      <img className={style.img} src={img} alt="respons" />
      <h1 className={style.title}>{title}</h1>
      <span className={style.subtitle}>{subtitle}</span>
    </div>
  );
};

export default ImportantItem;