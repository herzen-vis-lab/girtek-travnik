import React from 'react';
import styles from './ContactInfoSection.module.css';

import telegram from '/assets/icons/social/telegram.svg'
import vk from '/assets/icons/social/vk.svg'
import whatsapp from '/assets/icons/social/whatsapp.svg'

const ContactInfoSection: React.FC = () => {
  return (
    <section className={styles.contactInfo}>
      <h2 className={styles.contactTitle}>Связаться с нами</h2>
      <div className={styles.contactDetails}>
        <div className={styles.contactLeft}>
          <p className={styles.phoneNumber}>+7 (812) 980-37-15</p>
          <p className={styles.email}>124356grtk@mail.ru</p>
          <div className={styles.socialIcons}>
            <img src={telegram} alt="Telegram Icon" className={styles.socialIcon} />
            <img src={vk} alt="VK Icon" className={styles.socialIcon} />
            <img src={whatsapp} alt="WhatsApp Icon" className={styles.socialIcon} />
          </div>
        </div>
        <div className={styles.contactRight}>
          <p className={styles.address}>г. Санкт-Петербург, Коломяжский пр., 27</p>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/21c7f6167747c66c0f88e7b0b5a7111862e904a385325ed95297b69ac435e309?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="Map" className={styles.mapImage} />
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;