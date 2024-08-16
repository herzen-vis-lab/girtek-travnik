import React from 'react';
import styles from './Footer.module.css';

import youtube from '/assets/icons/social2/youtube.svg'
import telegram from '/assets/icons/social2/telegram.svg'
import d2 from '/assets/icons/social2/d2.svg'
import vk from '/assets/icons/social2/vk.svg'
import tiktok from '/assets/icons/social2/tiktok.svg'
import dzen from '/assets/icons/social2/dzen.svg'

import Linktelephone from '/assets/icons/social2/Linktelephone.svg'
import Linkwhatsapp from '/assets/icons/social2/Linkwhatsapp.svg'
import Linktelegram from '/assets/icons/social2/Linktelegram.svg'


const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn1}>
            <h3 className={styles.columnTitle}>Гиртек</h3>
            <nav className={styles.footerNav}>
              <a href="https://girtek.ru/" className={styles.footerLink}>Техника</a>
              <a href="https://girtek.ru/spare-parts/" className={styles.footerLink}>Запчасти</a>
              <a href="https://girtek.ru/delivery/" className={styles.footerLink}>Доставка</a>
              <a href="https://girtek.ru/blog/" className={styles.footerLink}>Блог</a>
              <a href="https://girtek.ru/company/vacancy/" className={styles.footerLink}>Вакансии</a>
              <a href="https://girtek.ru/company/feedback/" className={styles.footerLink}>Обратная связь</a>
              <a href="https://girtek.ru/company/what-is-rover/" className={styles.footerLink}>Что такое вездеход</a>
              <a href="https://girtek.ru/company/dealer/" className={styles.footerLink}>Стать дилером</a>
              <a href="https://girtek.ru/company/certificates/" className={styles.footerLink}>Сертификаты</a>
              <a href="https://girtek.ru/company/news/" className={styles.footerLink}>Новости</a>
              <a href="https://girtek.ru/payment/" className={styles.footerLink}>Оплата и доставка</a>
            </nav>
          </div>
          <div className={styles.footerColumn2}>
            <h3 className={styles.columnTitle}>Санкт-Петербург</h3>
            <p className={styles.address}>
              Коломяжский пр, д. 27, лит. А, офис 8, БЦ «Содружество»
            </p>
            {/* @ts-ignore */}
            <a onClick={() => window.location = 'tel:+7 (812) 980-37-15'} className={styles.contactInfo}>+7 (812) 980-37-15</a>
            {/* @ts-ignore */}
            <a onClick={() => window.location = 'mailto:info@girtek.ru'} className={styles.contactInfo}>info@girtek.ru</a>
          </div>
          <div className={styles.footerColumn3}>
            <h3 className={styles.columnTitle}>Москва</h3>
            <p className={styles.address}>
              Зеленоград, 4801-й пр., 7, стр. 3
            </p>
            {/* @ts-ignore */}
            <a onClick={() => window.location = 'tel:+7 (495) 278-07-91'} className={styles.contactInfo}>+7 (495) 278-07-91</a>
          </div>
          <div className={styles.footerColumn4}>
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
              <a href="https://www.youtube.com/girtekru">
                <img src={youtube} alt="YouTube Icon" className={styles.socialIcon} />
              </a>
              <a href="https://t.me/girtekru">
                <img src={telegram} alt="Telegram Icon" className={styles.socialIcon} />
              </a>
              <a href="https://www.drive2.ru/o/Snegobolotohod">
                <img src={d2} alt="D2 Icon" className={styles.socialIcon} />
              </a>
              <a href="https://vk.com/girtekru">
                <img src={vk} alt="VK Icon" className={styles.socialIcon} />
              </a>
              <a href="https://vm.tiktok.com/ZS5jGBHc/">
                <img src={tiktok} alt="TikTok Icon" className={styles.socialIcon} />
              </a>
              <a href="https://zen.yandex.ru/id/5e2d50b7612cec2e903a6e64">
                <img src={dzen} alt="Dzen Icon" className={styles.socialIcon} />
              </a>
            </div>
          </div>
          <div className={styles.contactUs}>
            <p className={styles.contactUsText}>Напишите нам:</p>
            <a href="viber://chat?number=+79533703715">
              <img src={Linktelephone} alt="Viber Icon" className={styles.socialIcon} />
            </a>
            <a href="https://wa.me/79533703715">
              <img src={Linkwhatsapp} alt="WhatsApp Icon" className={styles.socialIcon} />
            </a>
            <a href="https://teleg.run/vovakopanev">
              <img src={Linktelegram} alt="Telegram Icon" className={styles.socialIcon} />
            </a>         
          </div>
        </div>
        <p className={styles.copyright}>
          © Гиртек 2009–2024 г. Все права защищены.
        </p>
        <p className={styles.copyright}>
          {`Дизайн сайта  — Ольга Пупынина, Дарья Хмарина, Дарья Ракова
Разработка сайта — Лаборатория визуализации и компьютерной графики`}
        </p>
        <div className={styles.footerLinks}>
          <a href="https://girtek.ru/privacy/" className={styles.footerLink}>Политика конфиденциальности</a>
          <span className={styles.separator}>|</span>
          <a href="https://girtek.ru/cookies/" className={styles.footerLink}>Использование cookies</a>
          <span className={styles.separator}>|</span>
          <a href="https://girtek.ru/term/" className={styles.footerLink}>Условия использования</a>
          <span className={styles.separator}>|</span>
          <a href="https://girtek.ru/sitemap/" className={styles.footerLink}>Карта сайта</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;