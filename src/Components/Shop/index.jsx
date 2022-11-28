import axios from 'axios';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {setCategoryId} from '../../redux/slices/filterSlice'

import ShopItem from '../ShopItem';
import Skeleton from '../ShopItem/Skeleton';
import Categories from './Categories';

import style from './Shop.module.css'


const Shop = () => {
  const dispatch = useDispatch()
  const categoryId = useSelector(state => state.filter.categoryId)

  const [clothers, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  React.useEffect(() => {
    setIsLoading(true)
    axios.get(`https://63763d1481a568fc25f99127.mockapi.io/items?${categoryId > 0 ? `category=${categoryId}` : ""}`)
    .then((res) => {
      setItems(res.data)
      setIsLoading(false)
    })
  }, [categoryId])

  

  return (
    <>
      <div className={style.shop}>
        <h1 className={style.title}>Магазин</h1>
        <div className={style.subtitle}>
          <span className={style.main}>Головна - </span> 
          <span className={style.minor}>Магазин</span>
        </div>

        <div className={style.categories}>
          <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
        </div>
                

        <div className={style.items}>
          {isLoading 
            ? [...new Array(6)].map((_, index) => <Skeleton key={index}/>) 
            : clothers.map((item, index) => (
              <div key={index} className={style.container}>
                <ShopItem girl={item.girl} price={item.price} title={item.title}/>
              </div>))
            }
        </div>
      </div>
    </>
  );
};

export default Shop;