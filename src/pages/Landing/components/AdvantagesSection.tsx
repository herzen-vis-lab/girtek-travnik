import React from 'react';
import styles from './Advantages.module.css';

import card1 from '/assets/advantages/1 image.png'
import card6 from '/assets/advantages/2 image.png'
import card2 from '/assets/advantages/3 image.png'
import card3 from '/assets/advantages/4 image.png'
import card5 from '/assets/advantages/5 image.png'
import card4 from '/assets/advantages/6 image.png'


interface AdvantageProps {
    classItemName: string;
    title: string;
    description: string;
    imageSrc: any;
  }
  
  const Advantage: React.FC<AdvantageProps> = ({ classItemName, title, description, imageSrc }) => (
    <div className={classItemName}>
      <img src={imageSrc} alt="" className={styles.advantageImage} />
      <div className={styles.advantageContent}>
        <h3 className={styles.advantageTitle}>{title}</h3>
        <p className={styles.advantageDescription}>{description}</p>
      </div>
    </div>
  );

const Advantages: React.FC = () => {
  const advantagesData = [
    {
        classItemName: styles.high_performance,
        title: "ВЫСОКАЯ ПРОХОДИМОСТЬ",
        description: "Значительные углы въезда и съезда, большой дорожный просвет и низкий центр тяжести гарантируют непревзойденную проходимость вездехода",
        imageSrc: card1
    },
    {
        classItemName: styles.compact_sizes,
        title: "КОМПАКТНЫЕ РАЗМЕРЫ",
        description: "Вездеход легко помещается на обычный легковой прицеп, что позволяет транспортировать его без специального водительского удостоверения категории \"BE\"",
        imageSrc: card2
    },
    {
        classItemName: styles.durable_body,
        title: "ПРОЧНЫЙ КУЗОВ",
        description: "Несущий кузов из стали толщиной 1,5 мм, окрашенный порошковым методом, обеспечивает исключительную прочность и долговечность.",
        imageSrc: card3
    },
    {
        classItemName: styles.nice_price,
        title: "ПРИЯТНАЯ СТОИМОСТЬ",
        description: "\"Травник\" по цене сопоставим с квадроциклом, но значительно превосходит его по грузоподъемности и практичности имея положительную плавучесть. Вы всегда выйдете сухим из воды. Также в комплект входят лопата, топор и домкрат, что делает \"Травник\" готовым к любым вызовам",
        imageSrc: card4
    },
    {
        classItemName: styles.available_spare_parts,
        title: "ДОСТУПНЫЕ ЗАПЧАСТИ",
        description: "Разработан с учетом возможности полевого ремонта, что делает его идеальным для длительных экспедиций и путешествий. Все узлы и агрегаты серийного производства, такие как КПП ВАЗ, вариатор Сафари и редукторы Honda, обеспечивают легкость ремонта и доступность запчастей",
        imageSrc: card5
    },
    {
        classItemName: styles.buoyancy_and_stability_on_water,
        title: "ПЛАВУЧЕСТЬ И УСТОЙЧИВОСТЬ НА ВОДЕ",
        description: "Этот снегоболотоход ещё и герметичная водоизмещающая лодка! Возможна установка электрического или бензинового лодочного мотора для повышения скорости передвижения по воде",
        imageSrc: card6
    }
  ];

  return (
    <section className={styles.advantages}>
      <h2 id="advantages" className={styles.advantagesTitle}>Преимущества</h2>
      <div className={styles.advantagesGrid}>
        {advantagesData.map((advantage, index) => (
          <Advantage key={index} {...advantage} />
        ))}
      </div>
    </section>
  );
};

export default Advantages;