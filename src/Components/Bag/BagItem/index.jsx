import React from 'react';

import style from './BagItem.module.css'

import cancel from '../../../Assets/Img/cancel.svg'

const BagItem = () => {
  return (    
    <div className={style.good}>
      <div className={style.good_item}>
        <div className={style.cancel}><img className={style.imgCancel} src={cancel} alt="cancel" /></div>
        <div className={style.img}></div>
        <div className={style.good_name}>Пальто</div>
      </div>

      <span className={style.size}>M</span>
      <span className={style.good_price}>$ 129</span>
      <div className={style.good_amount}><span>1</span></div>
      <span className={style.good_all}>$ 129</span>
    </div>
  );
};

export default BagItem;