import style from "./PublicAndPrivacyPolicy.module.css"

import public_oferta from "../../Assets/public.json"

const Public = () => {
  return (
      <div className={style.public_oferta}>
        <h1 className={style.title}>Публічна Оферта</h1>
        <div className={style.subtitle}>
          <span className={style.main}>Головна - </span>
          <span className={style.minor}>Публічна Оферта</span>
        </div>

        <div className={style.text_oferta}>
          {public_oferta.map((item, index) => (
            <div className={style.item_oferta} key={index}><p>{item.text}</p></div>
          ))}
        </div>
      </div>
  );
};

export default Public;