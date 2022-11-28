import React from "react";
import { NavLink } from "react-router-dom";


import style from "../Navigation/Navigation.module.css";

import logo from "../../Assets/Img/logo.svg";
import telephone from "../../Assets/Img/telephone.svg";
import bag from "../../Assets/Img/bag.svg";
import PopUpCallBack from "../PopUpCallBack";
import PopUpSuccess from "../PopUpCallBack/PopUpSuccess";

const Navigation = () => {
  const [modalActive, setModalActive] = React.useState(false)
  const [modalSuccess, setModalSucces] = React.useState(false)

  let SetAtribute = () => {
    setModalSucces(true)
    setModalActive(false)
  }

  return (
    <>
      <header className={style.header}>
        <div className={style.header_logo}>
          <NavLink to='/' className={style.logo}>
            <img src={logo} alt='logo' />
          </NavLink>
        </div>

        <nav className={style.header_nav}>
          <NavLink to='/' className={({isActive}) => isActive ? `${style.link} ${style.linkActive}` : `${style.link}`}>Головна</NavLink>
          <NavLink to='/shop' className={({isActive}) => isActive ? `${style.link} ${style.linkActive}` : `${style.link}`}>Магазин</NavLink>
          <NavLink to='/about-brand' className={({isActive}) => isActive ? `${style.link} ${style.linkActive}` : `${style.link}`}>Про бренд</NavLink>
          <NavLink to='/contacts' className={({isActive}) => isActive ? `${style.link} ${style.linkActive}` : `${style.link}`}>Контакти</NavLink>
        </nav>

        <div className={style.header_contacts}>
          <div onClick={() => setModalActive(true)} className={style.telephone}><img src={telephone} alt='telephone' /></div>
          <span className={style.item}>+380676767676</span>
        </div>
        
        <NavLink to='/bag' className={style.header_bag}><img src={bag} alt='bag' /></NavLink>
      </header>

      <PopUpCallBack active={modalActive} setActive={setModalActive}>
        <form action="" className={style.form}>
          <h1 className={style.title}>Замовити зворотній дзвінок</h1>
          <div className={style.inputs}>
            <input className={style.input} type="text" placeholder="Ім'я" />
            <input className={style.input} type="emai" placeholder="E-mail" />
            <input className={style.input} type="text" placeholder="Телефон"/>
          </div>
          <div className={style.btn} onClick={SetAtribute}>Замовити дзвінок</div>
        </form>
      </PopUpCallBack>
      
      <PopUpSuccess active={modalSuccess} setModalSucces={setModalSucces}>
        <div className={style.succes}>
          <h1 className={style.title_success}>Чудово, ми вам скоро передзвонимо</h1>
          <div className={style.btn_success} onClick={() => setModalSucces(false)}>Закрити</div>
        </div>
      </PopUpSuccess>
    </>
    
  );
};

export default Navigation;
