import React from 'react';

import style from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={style.notFound}>
      <div className={style.container}>
        <div>
          <span className={style.content}>404</span>
        </div>
      </div>
    </div>
  );
};

export default NotFound;