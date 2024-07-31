import React from 'react';
import styles from './SpecificationsSection.module.css';

import pattern2 from '/assets/background/pattern2.png'

import dimensions_left from '/assets/card photos/dimensions left.png'
import dimensions_right from '/assets/card photos/dimensions right.png'
import weight_left from '/assets/card photos/weight left.png'
import weight_right from '/assets/card photos/weight right.png'
import engine_left from '/assets/card photos/engine left.png'
import engine_right from '/assets/card photos/engine right.png'


const tabsContent = [
  {left: dimensions_left, right: dimensions_right},
  {left: weight_left, right: weight_right},
  {left: engine_left, right: engine_right},
]

const SpecificationsSection: React.FC = () => {
  const [ activeTab, setActiveTab ] = React.useState(0);

  function getClassName(tab : number) {
    return activeTab === tab ? styles.specTab + ' ' + styles.specTabSelected : styles.specTab
  }

  return (
    <section className={styles.technicalSpecs}>
      <img src={pattern2} alt="" className={styles.specsBackground} />
      <h2 className={styles.specsTitle}>Технические характеристики</h2>
      <div className={styles.specsContent} style={{backgroundImage: "url(/assets/background/specifications-card.svg)"}}>
        <div className={styles.specsTabs}>
          <button className={getClassName(0)} onClick={() => setActiveTab(0)}>Габариты</button>
          <button className={getClassName(1)} onClick={() => setActiveTab(1)}>Масса</button>
          <button className={getClassName(2)} onClick={() => setActiveTab(2)}>Двигательь</button>
        </div>
        <div className={styles.specsImageContainer}> 
          <img src={tabsContent[activeTab].left} alt="" className={styles.leftImage}/>
          <img src={tabsContent[activeTab].right} alt="" className={styles.rightImage}/>
        </div>
      </div>
      <p className={styles.specsNote}>
        Все технические характеристики можно найти в документе по ссылке
      </p>
    </section>
  );
};

export default SpecificationsSection;