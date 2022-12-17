import React from 'react';
import { useDispatch } from 'react-redux';

import { addItem, minusItem, removeItem } from '../../../redux/slices/bagSlice'

import style from './BagItem.module.css'

import cancel from '../../../Assets/Img/cancel.svg'


const BagItem = ({id, title, size, price, count, img}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({
      id,
    }))
  }

  const onClickMinus = () => {
    dispatch(minusItem(id))
  }

  const onClickRemove = () => {
    if(window.confirm("Ти впевнений що хочеш видалити цей товар?")) {
      dispatch(removeItem(id));
    }
    
  }

  return (    
    <div className={style.good}>
      <div className={style.good_item}>
        <div onClick={onClickRemove} className={style.cancel}><img className={style.imgCancel} src={cancel} alt="cancel" /></div>
        <div className={style.img}><img src={img} alt="item" /></div>
        <div className={style.good_name}>{title}</div>
      </div>

      <span className={style.size}>{size}</span>
      <span className={style.good_price}>$ {price}</span>
      <div className={style.good_amount}>
        <div onClick={onClickMinus} className={style.minus}>-</div>
        <span>{count}</span>
        <div onClick={onClickPlus} className={style.plus}>+</div>
      </div>
      <span className={style.good_all}>$ {price * count}</span>
    </div>
  );
};

export default BagItem;