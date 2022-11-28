import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "../DreamTeam/DreamTeam.module.css";

import DreamCarousel from './Carousel/DreamCarousel';

const DreamTeam = () => {
  const [dreamteam, setDreamteam] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://63763d1481a568fc25f99127.mockapi.io/dreamteam")
    .then((res) => {
      setDreamteam(res.data);
    })
  }, [])

  return (
    <div className={style.DreamTeam}>
      <h1 className={style.title}>Команда Мрії Womazing</h1>
      <div className={style.carousel}>
        <DreamCarousel imgForCarousel={dreamteam}/>
      </div>
      <div className={style.rightbar}>
        <h1 className={style.subtitle}>Для кожної</h1>
        <div className={style.text}>
          <span>Кожна дівчина є унікальною. Однак, ми схожі в мільйоні дрібниць. Womazing шукає ці дрібниці та створює чудові речі, які вигідно підкреслюють переваги кожної дівчини.</span>
        </div>
        
        <NavLink className={style.aboutBrand} to="/about-brand">Детальніше про бренд</NavLink>
      </div>
      
    </div>
    
  );
};

export default DreamTeam;