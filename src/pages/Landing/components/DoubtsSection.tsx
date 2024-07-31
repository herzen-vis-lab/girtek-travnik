import React from 'react';
import styles from './DoubtsSection.module.css';

interface DoubtItemProps {
  number: string;
  text: string;
}

const DoubtItem: React.FC<DoubtItemProps> = ({ number, text }) => {
  return (
      <div className={styles.flexContainer}>
        <div className={styles.numberColumn}>
          <div className={styles.number}>{number}</div>
        </div>
        <div className={styles.textColumn}>
          <div className={styles.text}>{text}</div>
        </div>
      </div>
  );
};

interface DoubtItemData {
  number: string;
  text: string;
}

const doubtItems: DoubtItemData[] = [
  {
    number: '1',
    text: 'Наша компания гарантирует полное сопровождение и поддержку на всех этапах приобретения и эксплуатации вездехода.'
  },
  {
    number: '2',
    text: 'В случае возникновения проблем или вопросов, наши специалисты всегда готовы помочь вам решить любые технические трудности.'
  },
  {
    number: '3',
    text: 'Мы предоставляем гарантию на 12 месяцев или 2000 километров пробега, в зависимости от того, что наступит раньше.'
  },
  {
    number: '4',
    text: 'В течение гарантийного срока и пробега мы обязуемся бесплатно заменить любые детали или узлы вездехода, которые вышли из строя по нашей вине.'
  },
  {
    number: '5',
    text: 'Мы гарантируем, что наш вездеход соответствует всем техническим требованиям при следовании инструкциям по его использованию и обслуживанию.'
  }
];

const DoubtsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Остались сомнения?</h2>
      <div className={styles.container}>
        <div className={styles.contentWrapper1}>
            <DoubtItem key={0} number={doubtItems[0].number} text={doubtItems[0].text} />
        </div>
        <div className={styles.contentWrapper2}>
            <DoubtItem key={1} number={doubtItems[1].number} text={doubtItems[1].text} />
        </div>
        <div className={styles.contentWrapper3}>
            <DoubtItem key={2} number={doubtItems[2].number} text={doubtItems[2].text} />
        </div>
        <div className={styles.contentWrapper4}>
            <DoubtItem key={3} number={doubtItems[3].number} text={doubtItems[3].text} />
        </div>
        <div className={styles.contentWrapper5}>
            <DoubtItem key={4} number={doubtItems[4].number} text={doubtItems[4].text} />
        </div>
      </div>
      <p className={styles.callToAction}>Запишитесь на бесплатный тест-драйв:</p>
      <p className={styles.phoneNumber}>+7 (812) 980-37-15</p>
    </section>
  );
};

export default DoubtsSection;