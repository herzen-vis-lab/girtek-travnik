import React from 'react';
import styles from './Header.module.css';

import logo from '/assets/icons/logo.svg'
import menu from '/assets/icons/menu.svg'

import telegram from '/assets/icons/social/telegram.svg'
import vk from '/assets/icons/social/vk.svg'
import whatsapp from '/assets/icons/social/whatsapp.svg'

import { useStyleMediaQuery } from './../../../hooks/useStyleMediaQuery'
import { handleClickScroll } from '../../../helpers/handleClickScroll';

const Header: React.FC = () => {
  const { matches: hideMenuLinks } = useStyleMediaQuery({ mixOrMax: 'max', widthOrHeight: 'width', value: 1250 });

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Girtek Logo" className={styles.logo} />
          {
            hideMenuLinks ? <img src={menu} alt="Menu" className={styles.logo} /> : <></>
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
  );
};

export default Header;