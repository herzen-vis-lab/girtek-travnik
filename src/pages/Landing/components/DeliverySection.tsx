import React from 'react';
import styles from './DeliverySection.module.css';

import image1 from '/assets/icons/delivery process/1.svg'
import image2 from '/assets/icons/delivery process/2.svg'
import image3 from '/assets/icons/delivery process/3.svg'
import image4 from '/assets/icons/delivery process/4.svg'

interface DeliveryStepProps {
    number: string;
    title: string;
    description: string;
    imageSrc?: string;
  }

const steps: DeliveryStepProps[] = [
    {
        number: "1",
        title: "Оставьте заявку по кнопке ниже или по телефону",
        description: "Мы свяжемся с Вами для уточнения всех вопросов",
        imageSrc: image1
    },
    {
        number: "2",
        title: "Выберите удобный способ доставки",
        description: `Мы готовы взять на себя решение ваших проблем с доставкой вездехода по всей России, в страны СНГ и Ближнего Зарубежья. 
        
        Самыми востребованными способами доставки вездеходов являются:
        • Автомобильная (на трале) 
        • Железнодорожная (на ж/д платформе) 
        • Морская 
        
        Подробнее о способах доставки вы можете прочесть на сайте нашей компании Girtek`,
        imageSrc: image2
    },
    {
        number: "3",
        title: "Оплатите заветную покупку",
        description: "Вездеход готов к отправке",
        imageSrc: image3
    },
    {
        number: "4",
        title: "Получите посылку и преодолевайте любые преграды",
        description: "Желаем Вам приятных поездок",
        imageSrc: image4
    }
];


const DeliveryStep: React.FC<DeliveryStepProps> = ({ number, title, imageSrc, description }) => (
<>
    <div className={styles.deliveryStep}>
        <div className={styles.stepName}>
            <h3 className={styles.stepNumber}>{number + "."}</h3>
            <h4 className={styles.stepTitle}>{title}</h4>
        </div>
        {imageSrc && <img src={imageSrc} alt="" className={styles.stepImage} />}
        <p className={styles.stepDescription}>{description}</p>
    </div>
</>
);

const DeliverySection: React.FC = () => {
  return (
    <section className={styles.deliveryProcess}>
      <h2 className={styles.deliveryTitle}>Как оформить доставку</h2>
      <div className={styles.deliverySteps}>
        {steps.map((step, index) => (
            <DeliveryStep key={index} {...step} />
            ))}
      </div>
    </section>
  );
};

export default DeliverySection;