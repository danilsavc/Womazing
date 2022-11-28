import React from 'react';

import style from './PopUpSuccess.module.css'

const PopUpSuccess = ({active, setModalSucces, children}) => {
  return (
    <div className={active ? `${style.modal} ${style.active}` : `${style.modal}`} onClick={() => setModalSucces(false)}>
      <div className={active ? `${style.content} ${style.active}` : `${style.content}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default PopUpSuccess;