import React, { useState } from 'react';
import styles from './FAQSection.module.css';

import down_arrow from '/assets/icons/down white arrow.svg'
import up_arrow from '/assets/icons/up white arrow.svg'

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        className={styles.faqQuestion}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {question}
        <img
          src={isOpen ? up_arrow : down_arrow}
          alt=""
          className={styles.faqIcon}
        />
      </button>
      {isOpen && <p className={styles.faqAnswer}>{answer}</p>}
    </div>
  );
};

const faqData: FAQItemProps[] = [
    {
        question: "Есть ли тест-драйв?",
        answer: "Да, мы предоставляем возможность тест-драйва. Свяжитесь с нами для подробностей."
    },
    {
        question: "Можно ли оформить вездеход в лизинг?",
        answer: "Да, у нас есть программы лизинга. Обратитесь к нашим менеджерам для получения подробной информации."
    },
    {
        question: "Как происходит доставка и сервисное обслуживание в случае необходимости?",
        answer: "Мы осуществляем доставку по всей России. Сервисное обслуживание производится в наших центрах или с выездом специалиста."
    },
    {
        question: "Где ставится на учет вездеход?",
        answer: "Вездеход ставится на учет в Гостехнадзоре. Мы можем помочь с оформлением необходимых документов."
    }
];

const FAQSection: React.FC = () => {
  return (
    <section className={styles.faq}>
      <h2 className={styles.faqTitle}>Ответы на частые вопросы</h2>
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <FAQItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;