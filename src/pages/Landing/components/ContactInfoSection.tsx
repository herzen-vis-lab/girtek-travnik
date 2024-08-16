import React from 'react';
import styles from './ContactInfoSection.module.css';

import telegram from '/assets/icons/social/telegram.svg'
import vk from '/assets/icons/social/vk.svg'
import whatsapp from '/assets/icons/social/whatsapp.svg'

import map from '/assets/map.png'

const ContactInfoSection: React.FC = () => {
  return (
    <section className={styles.contactInfo}>
      <h2 className={styles.contactTitle}>Связаться с нами</h2>
      <div className={styles.contactDetails}>
        <div className={styles.contactLeft}>
          <p className={styles.phoneNumber}>+7 (812) 980-37-15</p>
          <p className={styles.email}>124356grtk@mail.ru</p>
          <div className={styles.socialIcons}>
            <a href="https://teleg.run/vovakopanev"><img src={telegram} alt="Telegram icon" className={styles.socialIcon} /></a>
            <a href="https://vk.com/girtekru"><img src={vk} alt="VK icon" className={styles.socialIcon} /></a>
            <a href="https://wa.me/79533703715"><img src={whatsapp} alt="WhatsApp icon" className={styles.socialIcon} /></a>
          </div>
        </div>
        <div className={styles.contactRight}>
          <p className={styles.address}>г. Санкт-Петербург, Коломяжский пр., 27</p>
          <a href="https://yandex.ru/maps/-/CDcfbOkX">
          <img src={map} alt="Map" className={styles.mapImage} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;