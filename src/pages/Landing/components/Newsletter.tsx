import React, { useState } from 'react';
import styles from './Newsletter.module.css';
import { Alert } from "./components/Alert";

import emailjs from '@emailjs/browser'

const Newsletter: React.FC = () => {
  const [isSubmited, setIsSubmited] = useState('')

  const [formData, setFormData] = useState({
    email: '',
  });

  const [alertOpacity, setAlertOpacity] = useState(1)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_8s6c144'
    const templateId = 'template_v61b95d'
    const publicKey = 'YuaEX2soTP8gzABiL'

    // Handle form submission logic here
    console.log('Form submitted:', formData);

    const templateParams = {
      from_name: 'Сайт Травник',
      from_email: formData.email,
      to_name: '',
      message: `Информационное сообщение сайта Травник
------------------------------------------
Пользователь с email ${formData.email} хочет подписаться на рассылку.

Сообщение сгенерировано автоматически.`
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setFormData({
          email: '',
        });
        setIsSubmited('success')
        setAlertOpacity(1)

        // setInterval(() => setIsSubmited(''), 3000);
      })
      .catch((error) => {
        console.error('Error sending email: ', error);
        setIsSubmited('error')
        setAlertOpacity(1)

        setTimeout(
          () => {
            var refreshIntervalId = setInterval(() => setAlertOpacity(x => x -= 0.01), 10)
            setTimeout(() => clearInterval(refreshIntervalId), 1000);
          }
          , 4000)

        // setInterval(() => setIsSubmited(''), 3000);
      })
  };

  return (
    <>
      {isSubmited == 'success' ? <Alert type='success' opacity={alertOpacity}><p>Вы пидписались на обновления</p></Alert> : <></>}
      {isSubmited == 'error' ? <Alert type='error' opacity={alertOpacity}><p>Что-то пошло не так</p></Alert> : <></>}

      <section className={styles.newsletter}>
        <div className={styles.newsletterContent}>
          <h2 className={styles.newsletterTitle}>Что-то новое</h2>
          <p className={styles.newsletterDescription}>
            Оставьте свою электронную почту, чтобы узнать о наших новинках. Без спама.
          </p>
          <form onSubmit={handleSubmit} className={styles.newsletterForm}>
            <label htmlFor="emailInput" className={styles.visuallyHidden}>Введите e-mail</label>
            <input
              type="email"
              id="emailInput"
              value={formData.email}
              onChange={handleChange}
              placeholder="Введите e-mail"
              required
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeButton}>Подписаться</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Newsletter;