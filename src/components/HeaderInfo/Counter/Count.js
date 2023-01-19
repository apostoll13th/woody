import React from "react";
import styles from "../HeaderImages/HeaderImages.module.scss";

function Count({ Counter }) {
  return (
    <div className={styles.thirdImage}>
      <div className={styles.counter}>
        <p>Свободных мест на ремонт:</p>
        <span>{Counter}</span>
      </div>
    </div>
  );
}

export default Count;
