import style from "./PublicAndPrivacyPolicy.module.css"

import privacy from '../../Assets/privacy.json'

const Privacy = () => {
  return (
    <div className={style.Privacy}>
      <h1 className={style.title}>Політика Конфіденційності</h1>
      <div className={style.subtitle}>
        <span className={style.main}>Головна - </span>
        <span className={style.minor}>Політика Конфіденційності</span>
      </div>

      <div className={style.text}>
        {privacy.map((item, index) => (
          <div className={style.item} key={index}><p>{item.text}</p></div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;