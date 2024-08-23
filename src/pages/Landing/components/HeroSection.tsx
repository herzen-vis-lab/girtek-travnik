import React from 'react';
import styles from './Hero.module.css';

import runway from '/assets/background/context.jpg'
// import uppart from '/assets/background/up part.png'
import TRAVNIK from '/assets/background/TRAVNIK.svg'
import { handleClickScroll } from '../../../helpers/handleClickScroll';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
        <img src={runway} alt="Travnik Vehicle" className={styles.heroBackground} />
        <div className={styles.heroContent}>
            {/* <img src={uppart} alt="" className={styles.heroOverlay} /> */}
            <div className={styles.heroTextContainer}>
            <img src={TRAVNIK} alt="Travnik Logo" className={styles.heroLogo} />
            <h1 className={styles.heroTitle}>
                Уникальный вездеход, созданный для преодоления сложных условий
                {/* <span className={styles.heroTitlePart}></span> */}
                {/* <span className={styles.heroTitlePart}>преодоления сложных условий</span> */}
            </h1>
            <button onClick={() => handleClickScroll("form")} className={styles.ctaButton}>Оставить заявку</button>
            </div>
        </div>
    </section>
  );
};

export default Hero;