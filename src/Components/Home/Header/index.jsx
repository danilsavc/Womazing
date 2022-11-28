import React from 'react';
import {Link} from 'react-scroll'
import { NavLink } from 'react-router-dom';

import style from "../Header/Header.module.css";

import down from "../../../Assets/Img/down.svg"
import girl1 from "../../../Assets/Img/header_girl1.png"
import girl2 from "../../../Assets/Img/header_girl2.png"
import girl3 from "../../../Assets/Img/header_girl3.png"
import Carousel from './Carousel/Carousel';

const Header = () => {

	const text = [
		{title: "Нові колекції в цьому сезоні", subtitle: "Витончені поєднання та оксамитові відтінки - ось те, що ви шукали цього сезону. Час досліджувати."},
		{title: "Вмикай новий сезон з WOMAZING", subtitle: "Ми оновили асортимент - легендарні колекції та новинки від вітчизняних дизайнерів"},
		{title: "Щось новеньке. Ми зачекалися на тебе.", subtitle: "Набридло шукати себе в сірому місті? Настав час нових ідей, свіжих фарб та натхнення з Womazing!"},
	]

	return (
		<>
				<div className={style.rightBlock}></div>
				<header className={style.header}>
					<div className={style.container}>
						<Carousel text={text}/>
					</div>
					
						<div className={style.buttons}>
								<Link to='NewCollection' spy={true} smooth={true} offset={-50} duration={500} className={style.button_down}>
									<img src={down} alt="down" />
								</Link>
								<NavLink className={style.button_open} to={'/shop'}>Відкрити магазин</NavLink>
						</div>

						<div className={style.bullits}>
								<div className={style.bullit1}></div>
								<div className={style.bullit2}></div>
								<div className={style.bullit3}></div>
						</div>
						<img src={girl1} alt="girl1" className={style.girl1} />
						<img src={girl2} alt="girl2" className={style.girl2} />
						<img src={girl3} alt="girl3" className={style.girl3} />
						
				</header>
		</>
	);
};

export default Header;