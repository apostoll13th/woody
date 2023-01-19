import React from "react";
import styles from "./Care.module.scss";
import MainImg from "./Img.png";
import CareCards from "./CareCards/CareCards";

function Care({ CareInfo }) {
  let cardCare = CareInfo.map((data) => (
    <CareCards
      key={data.id}
      header={data.header}
      text={data.text}
      img={data.img}
    />
  ));
  return (
    <div className={styles.Care}>
      <div className={styles.CareContent}>
        <div className={styles.CareImg}>
          <img src={MainImg} alt="" />
        </div>
        <div className={styles.CareText}>
          <h2 className={styles.hidden}>
            Оплата за результат. Бесплатный курьер. Подменный телефон на время
            ремонта.
          </h2>
          <p className={styles.CareTextHeader}>Почувствуйте заботу о себе</p>
          <div className={styles.CareCards}>{cardCare}</div>
        </div>
      </div>
    </div>
  );
}

export default Care;
