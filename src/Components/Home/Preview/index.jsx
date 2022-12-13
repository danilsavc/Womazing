import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClothers } from '../../../redux/slices/clotherSlice';

import style from "../Preview/Preview.module.css";

import ShopItem from '../../ShopItem';
import Skeleton from '../../ShopItem/Skeleton';

const Preview = () => {
  const dispatch = useDispatch();
  const {items, status} = useSelector(state => state.clother)
  const {categoryId, currentPage} = useSelector(state => state.filter)

  const getPreview = async () => {
    dispatch(fetchClothers({
      categoryId,
      currentPage,
    }))
  }

  React.useEffect(() => {
    getPreview();
    // eslint-disable-next-line
  }, [])

  
  return (
    <div className={style.preview}>
      <h1 id='NewCollection' className={style.title}>Нова Колекція</h1>
      <div className={style.items}>
        {status === 'loading' 
          ? [...new Array(3)].map((_, index) => <Skeleton key={index}/>) 
          : items.map((item, index) => (
            index < 3 ?
            <div key={index} className={style.container}>
              <ShopItem girl={item.girl} title={item.title} price={item.price}/>
            </div>
            : <div key={index}></div>
        ))}
      </div>
      <NavLink to='/shop' className={style.btn}><span className={style.btnText}>Відкрити магазин</span></NavLink>
    </div>
  );
};

export default Preview;