import style from "./Categories.module.css"

const Categories = ({value, onChangeCategory}) => {
  const items = ['Всі', 'Пальто', 'Джинси', 'Блейзери', 'Світшоти']

  return (
    <div>
      <nav className={style.categories}>
          {items.map((categoryName, index) => (
            <div key={index} onClick={() => onChangeCategory(index)} className={value === index ? `${style.categories_item} ${style.active}` : `${style.categories_item}`}><span>{categoryName}</span></div>
          ))}
        </nav>
    </div>
  );
};

export default Categories;