import React from 'react';

import style from "../Important/Important.module.css";
import ImportantItem from './ImportantItem';

import respons from "../../../Assets/Img/respons.svg"
import speed from "../../../Assets/Img/speed.svg"
import quality from "../../../Assets/Img/quality.svg"



const Important = () => {
  const items =[
    {img: respons, title: "Відповідальність", subtitle: "Ми дбаємо про людей та планету. Безвідходне виробництво та комфортні умови праці - все це Womazing"},
    {img: speed, title: "Швидкість", subtitle: "Завдяки налагодженій системі у Womazing ми можемо відшивати до 20 одиниць продукції у наших власних цехах."},
    {img: quality, title: "Якість", subtitle: "Наші професіонали працюють на найкращому обладнанні для пошиття одягу безпрецедентної якості"},
  ]

  return (
    <div className={style.important}>
      <h1 className={style.title}>Що важливо для нас</h1>
      <div className={style.items}>
        {
        items.map((item, index) => (
          <div key={index}>
            <ImportantItem img={item.img} title={item.title} subtitle={item.subtitle}/>
          </div>
        ))
      }
      </div>
      
    </div>
  );
};

export default Important;