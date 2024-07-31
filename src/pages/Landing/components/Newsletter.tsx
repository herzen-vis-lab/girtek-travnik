import React, { useState } from 'react';
import styles from './Newsletter.module.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed email:', email);
  };

  return (
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Введите e-mail"
            required
            className={styles.emailInput}
          />
          <button type="submit" className={styles.subscribeButton}>Подписаться</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;