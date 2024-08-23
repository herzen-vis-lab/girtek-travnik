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
        answer: "Конечно! Мы ценим вашу заинтересованность и понимаем желание приобрести достойный продукт, благодаря чему у вас будет возможность протестировать желаемый вездеход перед покупкой и убедиться в его качестве."
    },
    {
        question: "Можно ли оформить вездеход в лизинг?",
        answer: "Легко! Мы можем предоставить вам на выбор несколько лизинговых компаний партнёров, а если вы желаете обратиться в свою лизинговую компанию, мы предоставим коммерческое предложение на выбранный вами вездеход и все необходимые документы."
    },
    {
        question: "Как происходит доставка и сервисное обслуживание в случае необходимости?",
        answer: "Для своих клиентов мы можем оказать услуги по доставке заказанных вездеходов различными видами транспорта, выстроив оптимальную схему перевозки техники до нужного места, максимально выгодную и удобную для вас."
    },
    {
        question: "Где ставится на учет вездеход?",
        answer: "Вездеход ставится на учёт в Гостехнадзоре по месту вашей регистрации или месту регистрации вашей компании. Мы выдаём ПСМ и все необходимые документы."
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