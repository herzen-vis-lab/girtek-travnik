import React from 'react';
import styles from './Hero.module.css';

import runway from '/assets/background/context.png'
// import uppart from '/assets/background/up part.png'
import TRAVNIK from '/assets/background/TRAVNIK.svg'

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
        <img src={runway} alt="Travnik Vehicle" className={styles.heroBackground} />
        <div className={styles.heroContent}>
            {/* <img src={uppart} alt="" className={styles.heroOverlay} /> */}
            <div className={styles.heroTextContainer}>
            <img src={TRAVNIK} alt="Travnik Logo" className={styles.heroLogo} />
            <h1 className={styles.heroTitle}>
                <span className={styles.heroTitlePart}>Уникальный вездеход, созданный для</span>
                <span className={styles.heroTitlePart}>преодоления сложных условий</span>
            </h1>
            <button className={styles.ctaButton}>Оставить заявку</button>
            </div>
        </div>
    </section>
  );
};

export default Hero;