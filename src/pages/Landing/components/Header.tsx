import React from 'react';
import styles from './Header.module.css';

import logo from '/assets/icons/logo.svg'

import telegram from '/assets/icons/social/telegram.svg'
import vk from '/assets/icons/social/vk.svg'
import whatsapp from '/assets/icons/social/whatsapp.svg'


const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="Girtek Logo" className={styles.logo} />
        </div>
        <nav className={styles.navigation}>
          <a href="#travnik" className={styles.navLink}>Травник</a>
          <a href="#advantages" className={styles.navLink}>Преимущества</a>
          <a href="#specs" className={styles.navLink}>Характеристики</a>
          <a href="#delivery" className={styles.navLink}>Доставка</a>
        </nav>
        <div className={styles.contactInfo}>
          <div className={styles.contactDetails}>
            <span className={styles.phoneNumber}>+7 (812) 980-37-15</span>
            <span className={styles.email}>info@girtek.ru</span>
          </div>
          <div className={styles.socialIcons}>
            <img src={telegram} alt="Telegram icon" className={styles.socialIcon} />
            <img src={vk} alt="VK icon" className={styles.socialIcon} />
            <img src={whatsapp} alt="WhatsApp icon" className={styles.socialIcon} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;