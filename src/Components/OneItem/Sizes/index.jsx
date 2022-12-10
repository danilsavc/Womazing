import React from 'react';

import style from './Sizes.module.css'

const Sizes = ({ value, onChangeSize }) => {
  const sizeItem = ['XS', 'S', 'M', 'L', 'XL']

  return (
    <div className={style.sizes}>
      <span className={style.label}>Оберіть розмір</span>
      <div className={style.sizeContent}>
        {sizeItem.map((sizeName, index) => (
          <div key={index} onClick={() => onChangeSize(index)} className={value === index ? `${style.size} ${style.active}` : `${style.size}`}><span>{sizeName}</span></div>
        ))}
      </div>
    </div>
  );
};

export default Sizes;