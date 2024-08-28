import React, {useState} from 'react';
import styles from './SpecificationsSection.module.css';

import pattern2 from '/assets/background/pattern2.png'
// import card from '/assets/background/specifications-card.svg'

import dimensions_left from '/assets/card photos/dimensions left.png'
import dimensions_right from '/assets/card photos/dimensions right.png'
import weight_left from '/assets/card photos/weight left.png'
import weight_right from '/assets/card photos/weight right.png'
import engine_left from '/assets/card photos/engine left.png'
import engine_right from '/assets/card photos/engine right.png'

// import pdf from '/assets/ПС ТРАВНИК.pdf'

import down_arrow from '/assets/icons/down white arrow.svg'
import up_arrow from '/assets/icons/up white arrow.svg'

const tabsContent = [
  {left: dimensions_left, right: dimensions_right},
  {left: weight_left, right: weight_right},
  {left: engine_left, right: engine_right},
]

interface SpecificationString {
  left: string;
  right: string;
}

const tableData: SpecificationString[] = [
  {
    left: "Высота (с каркасом)",
    right: "2250 мм"
  },
  {
    left: "Клиренс",
    right: "380 MM"
  },
  {
    left: "Количество мест",
    right: "5 человек, включая водителя"
  },
  {
    left: "Скорость на земле",
    right: "39 км/ч"
  },
  {
    left: "Диапазон температур",
    right: "-40°C... +40°C"
  },
  {
    left: "Радиус разворота",
    right: "на месте"
  },
  {
    left: "Корпус",
    right: "стальной, несущий, с интегрированной стальной рамой; защитное покрытие цинкированием"
  },
  {
    left: "Управление",
    right: "два рычага управления поворотом, педаль газа, педаль сцепления, рычаг переключения коробки передач"
  },
  {
    left: "Тормоза",
    right: "гидравлические (совмещенные с тормозами управления)"
  },
  {
    left: "Приборы и управление",
    right: "включение зажигания, включение световых приборов"
  },
  {
    left: "Трансмиссия",
    right: "фрикционный механизм поворота"
  },
  {
    left: "Привод",
    right: "вариатор, коробка передач, механизмы поворота"
  },
  {
    left: "Охлаждение двигателя",
    right: "воздушное (бензиновый двигатель) / водяное (дизельный двигатель)"
  },
  {
    left: "Стартер",
    right: "электрический + ручной"
  },
  {
    left: "Объем масла",
    right: "1,1 л (бензиновый двигатель) / 2,8 л (дизельный двигатель)"
  },
  {
    left: "Объем бензобака",
    right: "6,5 л (бензиновый двигатель) / 5,5 л (дизельный двигатель)"
  },
];

const SpecificationsSection: React.FC = () => {
//   const onLinkClick = () => {
//     const pdfUrl = "ПС ТРАВНИК.pdf";
//     const link = document.createElement("a");
//     link.href = pdfUrl;
//     link.download = "Травник.pdf"; // specify the filename
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// };


  const [ activeTab, setActiveTab ] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  function getClassName(tab : number) {
    return activeTab === tab ? styles.specTab + ' ' + styles.specTabSelected : styles.specTab
  }

  return (
    <section className={styles.technicalSpecs}>
      <img src={pattern2} alt="" className={styles.specsBackground} />
      <h2 id="specs" className={styles.specsTitle}>Технические характеристики</h2>
      
      <div className={styles.specsCardImage}>
        <div className={styles.specsContent}>
          <div className={styles.specsTabs}>
            <button className={getClassName(0)} onClick={() => setActiveTab(0)}>Габариты</button>
            <button className={getClassName(1)} onClick={() => setActiveTab(1)}>Масса</button>
            <button className={getClassName(2)} onClick={() => setActiveTab(2)}>Двигатель</button>
          </div>
          <div className={styles.specsImageContainer}> 
            <img src={tabsContent[activeTab].left} alt="" className={styles.leftImage}/>
            <img src={tabsContent[activeTab].right} alt="" className={styles.rightImage}/>
          </div>
        </div>
      </div>
      <div className={styles.specsNote}>
        <button
          className={styles.tableQuestion}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {isOpen ? <p style={{color: '#d23008'}}>Дополнительно</p> : <p>Дополнительно</p>}
          <img
            src={isOpen ? up_arrow : down_arrow}
            alt=""
            className={styles.tableIcon}
          />
        </button>
        
        {isOpen && <>
          <p>
          {/* Все технические характеристики можно найти в документе по <a style={{textDecoration: "underline", cursor: "pointer"}} onClick={() => onLinkClick()}>ссылке</a> */}
          {/* Все технические характеристики можно найти в документе по <a href={pdf} rel="noopener noreferrer" target="_blank" style={{textDecoration: "underline", cursor: "pointer"}}>ссылке</a> */}
          </p>
          <div className={styles.specificationTable}>
            {tableData.map((item) => (
              <div className={styles.tableString}>
                <span className={styles.tableLeft}>{item.left}</span>
                <span className={styles.tableRight}>{item.right}</span>
              </div>
            ))}
          </div>
        </>
        }
      </div>
      
      {/* <object data="pdf" type="application/pdf" width="100%" height="100%">
        <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
      </object> */}
    </section>
  );
};

export default SpecificationsSection;