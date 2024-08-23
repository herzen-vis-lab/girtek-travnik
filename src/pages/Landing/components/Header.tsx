import React from 'react';
import styles from './Header.module.css';

import logo from '/assets/icons/logo.svg'
import menu from '/assets/icons/menu.svg'

import up_arrow from '/assets/icons/up grey arrow.svg'

import telegram from '/assets/icons/social/telegram.svg'
import vk from '/assets/icons/social/vk.svg'
import whatsapp from '/assets/icons/social/whatsapp.svg'

import { useStyleMediaQuery } from './../../../hooks/useStyleMediaQuery'
import { handleClickScroll } from '../../../helpers/handleClickScroll';

const Header: React.FC = () => {
  const [ isMenuOpen, setIsMenuOpen ] = React.useState(false);
  const { matches: hideMenuLinks } = useStyleMediaQuery({ mixOrMax: 'max', widthOrHeight: 'width', value: 1250 });

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoWrapper}>
            <a href="https://girtek.ru/"><img src={logo} alt="Girtek Logo" className={styles.logo} /></a>
            {
              hideMenuLinks ? <img src={menu} alt="Menu" onClick={() => setIsMenuOpen(x => !x)} className={styles.logo} /> : <></>
            }
          </div>
          {hideMenuLinks ? <></> : <nav className={styles.navigation}>
              <a onClick={() => handleClickScroll("travnik")} className={styles.navLink}>Травник</a>
              <a onClick={() => handleClickScroll("advantages")} className={styles.navLink}>Преимущества</a>
              <a onClick={() => handleClickScroll("specs")} className={styles.navLink}>Характеристики</a>
              <a onClick={() => handleClickScroll("delivery")} className={styles.navLink}>Доставка</a>          
          </nav>}
          <div className={styles.contactInfo}>
            <div className={styles.contactDetails}>
              <span className={styles.phoneNumber}>+7 (812) 980-37-15</span>
              <span className={styles.email}>info@girtek.ru</span>
            </div>
            <div className={styles.socialIcons}>
              <a href="https://teleg.run/vovakopanev"><img src={telegram} alt="Telegram icon" className={styles.socialIcon} /></a>
              <a href="https://vk.com/girtekru"><img src={vk} alt="VK icon" className={styles.socialIcon} /></a>
              <a href="https://wa.me/79533703715"><img src={whatsapp} alt="WhatsApp icon" className={styles.socialIcon} /></a>
            </div>
          </div>
        </div>
      </header>
      {isMenuOpen ?
      <div className={styles.menu}>
        <div onClick={() => handleClickScroll("travnik")} className={styles.menuItem}><a className={styles.menuItem}>Травник</a></div>
        <div onClick={() => handleClickScroll("advantages")} className={styles.menuItem}><a className={styles.menuItem}>Преимущества</a></div>
        <div onClick={() => handleClickScroll("specs")} className={styles.menuItem}><a className={styles.menuItem}>Характеристики</a></div>
        <div onClick={() => handleClickScroll("delivery")} className={styles.menuItem}><a className={styles.menuItem}>Доставка</a></div>
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}><img src={up_arrow} alt="" className={styles.menuItemImage}/></div>   
        
      </div> : <></>}
    </>
  );
};

export default Header;