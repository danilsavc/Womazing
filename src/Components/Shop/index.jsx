import axios from 'axios';
import React from 'react';
import qs from 'qs'
import { useNavigate } from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, setCurrenPage, setFilters } from '../../redux/slices/filterSlice'
import Pagination from '../Pagination';

import ShopItem from '../ShopItem';
import Skeleton from '../ShopItem/Skeleton';
import Categories from './Categories';

import style from './Shop.module.css'


const Shop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const {categoryId, currentPage} = useSelector(state => state.filter)

  const [clothers, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
    onChangePage(1)
  }

  const onChangePage = number => {
    dispatch(setCurrenPage(number))
  }

  const fetchItems = () => {
    setIsLoading(true)
    axios.get(`https://63763d1481a568fc25f99127.mockapi.io/items?page=${currentPage}&limit=6&${categoryId > 0 ? `category=${categoryId}` : ""}`)
    .then((res) => {
      setItems(res.data)
      setIsLoading(false)
    })
  }

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))

      dispatch(setFilters({
        ...params,
      }))

      isSearch.current = true;
    }
     // eslint-disable-next-line
  }, [])

  React.useEffect(() => {
    window.scrollTo(0, 0)

    if (!isSearch.current) {
      fetchItems();
    }

    isSearch.current = false;
 // eslint-disable-next-line
  }, [categoryId, currentPage,])

  React.useEffect(() => {
    if(isMounted.current) {
      const queryString = qs.stringify({
        categoryId: categoryId, 
        currentPage
      });
  
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
    // eslint-disable-next-line
  }, [categoryId, currentPage])

  return (
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
      <div className={style.pagination}>
        <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
      </div>

    </div>
  );
};

export default Shop;