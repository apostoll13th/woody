import React from 'react';
import styles from "./CareCards.module.scss";

function CareCards({header,text,img}) {
  return (
      <div className={styles.CareCard}>
        <div className={styles.CardContent}>
          <img src={img} alt=""/>
          <h1 className={styles.hidden}>{header}</h1>
          <h5>{header}</h5>
          <span>{text}</span>
        </div>
      </div>
  )
}

export default CareCards;