import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Гиртек</h3>
            <nav className={styles.footerNav}>
              <a href="#" className={styles.footerLink}>Техника</a>
              <a href="#" className={styles.footerLink}>Запчасти</a>
              <a href="#" className={styles.footerLink}>Доставка</a>
              <a href="#" className={styles.footerLink}>Блог</a>
              <a href="#" className={styles.footerLink}>Вакансии</a>
              <a href="#" className={styles.footerLink}>Обратная связь</a>
              <a href="#" className={styles.footerLink}>Что такое вездеход</a>
              <a href="#" className={styles.footerLink}>Стать дилером</a>
              <a href="#" className={styles.footerLink}>Сертификаты</a>
              <a href="#" className={styles.footerLink}>Новости</a>
              <a href="#" className={styles.footerLink}>Оплата и доставка</a>
            </nav>
          </div>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Санкт-Петербург</h3>
            <p className={styles.address}>
              Коломяжский пр, д. 27, лит. А, офис 8, БЦ «Содружество»
            </p>
            <p className={styles.contactInfo}>+7 (812) 980-37-15</p>
            <p className={styles.contactInfo}>info@girtek.ru</p>
          </div>
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Москва</h3>
            <p className={styles.address}>
              Зеленоград, 4801-й пр., 7, стр. 3
            </p>
            <p className={styles.contactInfo}>+7 (495) 278-07-91</p>
          </div>
          <div className={styles.footerColumn}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1cd01b7a664ddb16fccd88dbd336c0b00767a7f29365200c8bc305b51429b76f?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="Girtek Logo" className={styles.footerLogo} />
            <p className={styles.legalInfo}>
              Использование материалов, размещенных на сайтах
              владельца допускается только с письменного
              согласия «ГИРТЕК» за исключением случаев,
              предусмотренных разделом 2 настоящих правил.
            </p>
            <p className={styles.privacyInfo}>
              Продолжая использовать наш сайт, вы даете
              согласие на обработку файлов Cookies и других
              пользовательских данных, в соответствии с
              Политикой конфиденциальности.
            </p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.socialLinks}>
            <p className={styles.socialText}>Гиртек в соцсетях:</p>
            <div className={styles.socialIcons}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/663de54e8dfe0a1521cd4522948c8db9503da630e48911c1c22e47a6660b3692?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="Social Icon 1" className={styles.socialIcon} />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/588990c1f9f5b17efae4883a22045d6b9e7dd612ea032cd9d9d701f11cf07a3c?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="Social Icon 2" className={styles.socialIcon} />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/10c5d6e855acdfea3f5e35025d1063128ccc2e6ff0730f775d8b4d4a08221fea?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="Social Icon 3" className={styles.socialIcon} />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/e34721b9d24ffb50f14c55ba11c52ec0e0daa29f9f89e3c7a6c09be5d39c2685?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="Social Icon 4" className={styles.socialIcon} />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c449fa59db5b958aa72d47f51c9f91702d2e04b639da432c8dcff5baf3c0acd0?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="Social Icon 5" className={styles.socialIcon} />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c21828655e5391a3079582f0d773dc102622adb1a6db9f60919a9432497581e?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="Social Icon 6" className={styles.socialIcon} />
            </div>
          </div>
          <div className={styles.contactUs}>
            <p className={styles.contactUsText}>Напишите нам:</p>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef647cf53f47412b04cf5f5fdd9a3d6678a3502b722ea1cb64ef5948964688fe?apiKey=1c1bda4502174a749d79ad8621fe0119&&apiKey=1c1bda4502174a749d79ad8621fe0119" alt="Contact Button" className={styles.contactButton} />
          </div>
        </div>
        <p className={styles.copyright}>
          © Гиртек 2009–2024 г. Все права защищены.
        </p>
        <div className={styles.footerLinks}>
          <a href="#" className={styles.footerLink}>Политика конфиденциальности</a>
          <span className={styles.separator}>|</span>
          <a href="#" className={styles.footerLink}>Использование cookies</a>
          <span className={styles.separator}>|</span>
          <a href="#" className={styles.footerLink}>Условия использования</a>
          <span className={styles.separator}>|</span>
          <a href="#" className={styles.footerLink}>Карта сайта</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;