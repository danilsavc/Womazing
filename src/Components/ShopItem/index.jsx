import React from 'react';

import style from "./ShopItem.module.css";

import right from "../../Assets/Img/right.svg"
import { NavLink } from 'react-router-dom';

const ShopItem = ({girl, title, price, id}) => {
  return (
    <div className={style.item}>
      <div className={style.img}>
        <NavLink to={`/shop/thing/${id}`}>
          <div className={style.backgroundHover}><img className={style.right} src={right} alt="right" /></div>
        </NavLink>
        <img className={style.content} src={girl} alt="girl" /> 
      </div>
      <h1 className={style.title}>{title}</h1>
      <span className={style.price}>${price}</span>
    </div>
  );
};

export default ShopItem;