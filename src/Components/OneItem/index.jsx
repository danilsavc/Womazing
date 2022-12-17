import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { addItem } from '../../redux/slices/bagSlice';

import style from './OneItem.module.css'

import Sizes from './Sizes';
import Loading from './Loading';

const sizeItem = ['XS', 'S', 'M', 'L', 'XL']

const OneItem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const bagItem = useSelector((state) => state.bag.items.find((obj) => obj.id === id))

  const addedCount = bagItem ? bagItem.count : 0

  const [clothers, setClothers] = React.useState();
  

  const [size, setSize] = React.useState(0)

  const onChangeSize = (index) => {
    setSize(index)
  }

  const onClickAdd = () => {
    const item = {
      id,
      title: clothers.title,
      img: clothers.girl,
      price: clothers.price,
      size: sizeItem[size],
    }
    dispatch(addItem(item))
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
    return <Loading/>
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
          <Sizes value={size} onChangeSize={onChangeSize} sizeItem={sizeItem}/>
        </div>
        <div className={style.btn}>
          <div onClick={onClickAdd} className={style.addInBag}><span>Додати в кошик</span></div>
          {addedCount > 0 && <div className={style.countThings}>{addedCount}</div>}
          
        </div>
        
      </div>
    </div>
  );
};

export default OneItem;