import React from 'react';
import { NavLink } from 'react-router-dom';

import style from '../Footer/Footer.module.css'

import logo from '../../Assets/Img/logo.svg'
import insta from '../../Assets/Img/insta.svg'
import facebook from '../../Assets/Img/facebook.svg'
import twitter from '../../Assets/Img/twitter.svg'
import visa from '../../Assets/Img/visa.png'

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.wrapper}>

        <div className={style.logo}>
          <img src={logo} alt="" />
        </div>

        <div className={style.terms}>
          <span className={style.terms_item}>© Усі права захищені</span>
          <NavLink className={style.terms_item} to='/privacy-policy'>Політика конфіденційності</NavLink>
          <NavLink className={style.terms_item} to='/public-oferta'>Публічна оферта</NavLink>
        </div>

        <nav className={style.header_nav}>
          <NavLink to='/' className={({isActive}) => isActive ? `${style.link} ${style.linkActive}` : `${style.link}`}>Головна</NavLink>
          <NavLink to='/shop' className={({isActive}) => isActive ? `${style.link} ${style.linkActive}` : `${style.link}`}>Магазин</NavLink>
          <NavLink to='/about-brand' className={({isActive}) => isActive ? `${style.link} ${style.linkActive}` : `${style.link}`}>Про бренд</NavLink>
          <NavLink to='/contacts' className={({isActive}) => isActive ? `${style.link} ${style.linkActive}` : `${style.link}`}>Контакти</NavLink>
      </nav>

      <div className={style.information}>
        <span className={style.telephone}>+380676767676</span>
        <span className={style.email}>danilsavc@gmail.com</span>
        <div className={style.socialNetwork}>
          <img className={style.sn} src={insta} alt="" />
          <img className={style.sn} src={facebook} alt="" />
          <img className={style.sn} src={twitter} alt="" />
        </div>
        <img className={style.visa} src={visa} alt="" />
      </div>

      </div>
    </footer>
  );
};

export default Footer;