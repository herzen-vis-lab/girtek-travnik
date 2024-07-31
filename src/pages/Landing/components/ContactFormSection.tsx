import React, { useState } from 'react';
import styles from './ContactFormSection.module.css';

const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section className={styles.contactForm}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.formTitle}>Оформить заявку на травник</h2>
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
          <p className={styles.price}>1 286 000 ₽</p>
          <button type="submit" className={styles.submitButton}>Отправить заявку</button>
        </div>
      </form>
    </section>
  );
};

export default ContactFormSection;