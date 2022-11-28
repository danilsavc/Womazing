import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './AboutBrand.module.css'


const AboutBrand = () => {
  const text1 = "Womazing була заснована у 2010-му і стала однією з найуспішніших компаній нашої країни. Як і багато українських фірм, Womazing залишається сімейною компанією, хоча жоден із членів сім'ї не є модельєром. Ми діємо за успішною формулою, вдаючись до послуг відомих модельєрів для створення колекцій. Цей метод був описаний критиком моди Коліном Макдавеллом як форма дизайнерської співтворчості, характерна для низки італійських prêt-a-porter компаній."
  const text2 = "Перший магазин Womazing був відкритий у маленькому містечку на півночі країни у 2010-му році. Перша колекція складалася з двох пальт та костюма, які були копіями паризьких моделей. Незважаючи на те, що за освітою засновниця була адвокатом, її сім'я завжди була тісно пов'язана з шиттям (прабабуся засновниці шила одяг для жінок, а мати заснувала професійну школу крою та шиття). Прагнення виробляти одяг для мас несло великі перспективи, особливо в той час, коли висока мода, як і раніше, домінувала, а ринку якісного prêt-a-porter просто не існувало."
  const [aboutDream, setAboutDream] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://63763d1481a568fc25f99127.mockapi.io/aboutBrand")
    .then((res) => {
      setAboutDream(res.data);
    })
  }, [])

  return (
    <div className={style.aboutBrand}>
      <h1 className={style.title}>Про бренд</h1>
      <div className={style.subtitle}>
        <span className={style.main}>Головна - </span> 
        <span className={style.minor}>Про бренд</span>
      </div>
      <div className={style.container}>
        {aboutDream.map((item, index) => (
          <div key={index} className={style.img}>
            <img src={item.img} alt="" />
          </div>
        ))}
        <div className={style.text1}>
          <h1 className={style.text1_title}>Ідея для жінки</h1>
          <span className={style.main}>{text1}</span>
        </div>
        <div className={style.text2}>
          <h1 className={style.text2_title}>Магія в деталях</h1>
          <span className={style.main}>{text2}</span>
        </div>
      </div>
      <NavLink className={style.button_open} to={'/shop'}>Відкрити магазин</NavLink>
    </div>
  );
};

export default AboutBrand;