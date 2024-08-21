import React from 'react';
import styles from './About.module.css';

import pattern from '/assets/background/pattern.png'
import vehicle from '/assets/background/vehicle.png'

import accessible from '/assets/icons/quality/accessible.svg'
import reliable from '/assets/icons/quality/reliable.svg'
import repairable from '/assets/icons/quality/repairable.svg'

const Hero: React.FC = () => {
  return (
    <section className={styles.about}>
        <img src={pattern} alt="" className={styles.aboutBackground} />
        <div className={styles.aboutContent}>
            <img src={vehicle} alt="Travnik Vehicle" className={styles.aboutImage} />
            <div className={styles.aboutText}>
                <h2 id="travnik" className={styles.aboutTitle}>о Травнике</h2>
                <p className={styles.aboutDescription}>
                    Вездеход "Травник" — ваш пропуск в мир безграничных возможностей.
                </p>
                <p className={styles.aboutDescription}>
                    Идеально подходит для охотников, рыболовов, любителей природы и активного отдыха
                </p>
                <p className={styles.aboutDescription}>
                    Для тех, кто ценит возможность свободно передвигаться по любой местности
                </p>
                <ul className={styles.featureList}>
                    <li className={styles.featureItem}>
                    <img src={reliable} alt="" className={styles.featureIcon} />
                    <span className={styles.featureText}>Надежный</span>
                    </li>
                    <li className={styles.featureItem}>
                    <img src={repairable} alt="" className={styles.featureIcon} />
                    <span className={styles.featureText}>Ремонтопригодный</span>
                    </li>
                    <li className={styles.featureItem}>
                    <img src={accessible} alt="" className={styles.featureIcon} />
                    <span className={styles.featureText}>Доступный</span>
                    </li>
                </ul>
                <p className={styles.price}>Цена: от 1 386 000 ₽</p>
            </div>
        </div>
    </section>
  );
};

export default Hero;