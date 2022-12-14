import React from 'react';

import style from './OneItem.module.css'

import Sizes from './Sizes';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';

const OneItem = () => {
  const [clothers, setClothers] = React.useState();
  const { id } = useParams();

  const [size, setSize] = React.useState(0)

  const onChangeSize = (index) => {
    setSize(index)
  }

  React.useEffect(() => {
    async function fetchClother() {
      try {
        const { data } = await axios.get('https://63763d1481a568fc25f99127.mockapi.io/items/' + id)
        setClothers(data)
      } catch (error) {
        alert("Error")
      }
    }
    fetchClother();
  }, [id])

  if (!clothers) {
    return <div className={style.loading}><span>Загрузка...</span></div>
  }

  return (
    <div className={style.OneItem}>
      <h1 className={style.title}>{clothers.title}</h1>
      <div className={style.subtitle}>
        <NavLink to='/'><span className={style.main}>Головна - </span></NavLink> 
        <span className={style.minor}>Магазин</span>
      </div>
      <div className={style.item}>
        <img className={style.img} src={clothers.girl} alt="item" />
        <span className={style.price}>$ {clothers.price}</span>
        <div className={style.sizes}>
          <Sizes value={size} onChangeSize={onChangeSize}/>
        </div>
        <div className={style.btn}>
          <div className={style.addInBag}><span>Додати в кошик</span></div>
          <div className={style.countThings}>0</div>
        </div>
        
      </div>
    </div>
  );
};

export default OneItem;