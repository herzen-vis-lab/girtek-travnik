import React, { useState } from 'react';
import styles from './ContactFormSection.module.css';
import emailjs from '@emailjs/browser'
import { Alert } from "./components/Alert";

const ContactFormSection: React.FC = () => {
  const [isSubmited, setIsSubmited] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
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

    const serviceId = 'service_emd2b7c1'
    const templateId = 'template_v61b95d'
    const publicKey = 'YuaEX2soTP8gzABiL'

    // Handle form submission logic here
    console.log('Form submitted:', formData);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: '',
      message: `Информационное сообщение сайта Травник
------------------------------------------
Вам было отправлена заявка на Вездеход Травник

Контактное лицо: ${formData.name}
Контактный email: ${formData.email}
Контактный телефон: ${formData.phone}
Комментарий: ${formData.comment}
Товар: Вездеход Травник

Ссылка на товар:
https://girtek.ru/catalog/wheel/travn/travnik/

Сообщение сгенерировано автоматически.`
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setFormData({
          name: '',
          email: '',
          phone: '',
          comment: ''
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
      {isSubmited == 'success' ? <Alert type='success' opacity={alertOpacity}><p>Сообщение успешно отправлено</p></Alert> : <></>}
      {isSubmited == 'error' ? <Alert type='error' opacity={alertOpacity}><p>Что-то пошло не так</p></Alert> : <></>}
      
      <section className={styles.contactForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 id="form" className={styles.formTitle}>Оформить заявку на травник</h2>
        <label htmlFor="name" className={styles.visuallyHidden}>ФИО</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="ФИО*"
          required
          className={styles.input}
        />

        <label htmlFor="email" className={styles.visuallyHidden}>E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="e-mail*"
          required
          className={styles.input}
        />

        <label htmlFor="phone" className={styles.visuallyHidden}>Телефон</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="телефон*"
          required
          className={styles.input}
        />

        <label htmlFor="comment" className={styles.visuallyHidden}>Комментарий</label>
        <textarea
          id="comment"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="комментарий"
          className={styles.textarea}
        ></textarea>

        <div className={styles.formFooter}>
          <p className={styles.price}>1 386 000 ₽</p>
          <button type="submit" className={styles.submitButton}>Отправить заявку</button>
        </div>
      </form>
    </section>
    </>
  );
};

export default ContactFormSection;