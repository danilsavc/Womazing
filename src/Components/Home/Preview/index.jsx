import React from 'react';
import { NavLink } from 'react-router-dom';

import style from "../Preview/Preview.module.css";

import ShopItem from '../../ShopItem';
import axios from 'axios';
import Skeleton from '../../ShopItem/Skeleton';

const Preview = () => {
  const [clothers_preview, setClothers_preview] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true)
    axios.get("https://63763d1481a568fc25f99127.mockapi.io/items?preview=true")
    .then((res) => {
      setClothers_preview(res.data)
      setIsLoading(false)
    })
  }, [])

  
  return (
    <div className={style.preview}>
      <h1 id='NewCollection' className={style.title}>Нова Колекція</h1>
      <div className={style.items}>
        {isLoading 
          ? [...new Array(3)].map((_, index) => <Skeleton key={index}/>) 
          : clothers_preview.map((item, index) => (
            <div key={index} className={style.container}>
              <ShopItem girl={item.girl} title={item.title} price={item.price}/>
            </div>
        ))}
      </div>
      <NavLink to='/shop' className={style.btn}><span className={style.btnText}>Відкрити магазин</span></NavLink>
    </div>
  );
};

export default Preview;