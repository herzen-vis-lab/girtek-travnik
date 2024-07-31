import React from 'react';
import styles from './Advantages.module.css';

interface AdvantageProps {
    classItemName: string;
    title: string;
    description: string;
    imageSrc: string;
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
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/c95552b8fc5aed5521bf9081cc1ab1d4ef2fb472f71b0f57b63338eaa1f5d9d2?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119"
    },
    {
        classItemName: styles.compact_sizes,
        title: "КОМПАКТНЫЕ РАЗМЕРЫ",
        description: "Вездеход легко помещается на обычный легковой прицеп, что позволяет транспортировать его без специального водительского удостоверения категории \"BE\"",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc42c13f9ba3af074c20e5488b07f05466a6f7a0748107b7cb6fbc3c4693a22d?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119"
    },
    {
        classItemName: styles.durable_body,
        title: "ПРОЧНЫЙ КУЗОВ",
        description: "Несущий кузов из стали толщиной 1,5 мм, окрашенный порошковым методом, обеспечивает исключительную прочность и долговечность.",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/2130fa6287fdd9dfdf0976132c1d939e42b6f4d6be8253dd9e9a0c4d8c0d29de?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119"
    },
    {
        classItemName: styles.nice_price,
        title: "ПРИЯТНАЯ СТОИМОСТЬ",
        description: "\"Травник\" по цене сопоставим с квадроциклом, но значительно превосходит его по грузоподъемности и практичности имея положительную плавучесть. Вы всегда выйдете сухим из воды. Также в комплект входят лопата, топор и домкрат, что делает \"Травник\" готовым к любым вызовам",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b64d4a9424712aa28d4eaa069436f64e1e536cb4af3f3e4a44d011fddaa5f491?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119"
    },
    {
        classItemName: styles.available_spare_parts,
        title: "ДОСТУПНЫЕ ЗАПЧАСТИ",
        description: "Разработан с учетом возможности полевого ремонта, что делает его идеальным для длительных экспедиций и путешествий. Все узлы и агрегаты серийного производства, такие как КПП ВАЗ, вариатор Сафари и редукторы Honda, обеспечивают легкость ремонта и доступность запчастей",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7834a2f1fdb945356dcd69fd3ef3d7fac920a69b104ee9102e75af35e67834a1?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119"
    },
    {
        classItemName: styles.buoyancy_and_stability_on_water,
        title: "ПЛАВУЧЕСТЬ И УСТОЙЧИВОСТЬ НА ВОДЕ",
        description: "Этот снегоболотоход ещё и герметичная водоизмещающая лодка! Возможна установка электрического или бензинового лодочного мотора для повышения скорости передвижения по воде",
        imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/63f0da2b08daa264a964ef54708a4be4cef48ab2fa816c4d440aacf5a677a465?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119"
    }
  ];

  return (
    <section className={styles.advantages}>
      <h2 className={styles.advantagesTitle}>Преимущества</h2>
      <div className={styles.advantagesGrid}>
        {advantagesData.map((advantage, index) => (
          <Advantage key={index} {...advantage} />
        ))}
      </div>
    </section>
  );
};

export default Advantages;