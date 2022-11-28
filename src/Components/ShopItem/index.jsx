import React from 'react';

import style from "./ShopItem.module.css";

import right from "../../Assets/Img/right.svg"

const ShopItem = ({girl, title, price}) => {
  return (
    <div className={style.item}>
      <div className={style.img}>
        <div className={style.backgroundHover}><img className={style.right} src={right} alt="right" /></div>
        <img className={style.content} src={girl} alt="girl" />
      </div>
      
      <h1 className={style.title}>{title}</h1>
      <span className={style.price}>${price}</span>
    </div>
  );
};

export default ShopItem;