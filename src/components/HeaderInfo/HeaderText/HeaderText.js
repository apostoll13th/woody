import React from "react";
import styles from "./HeaderText.module.scss";
import ModalComponent from "../../ModalComponent/ModalComponent";

function HeaderText({ textHeader, textDesc }) {
  return (
    <div className={styles.HeaderText}>
      <h1 className={styles.hidden}>{textDesc}</h1>
      <p>{textHeader}</p>
      <ModalComponent
        textBtn={"Заказать ремонт"}
        body={"Заполните форму заказа ремонта"}
      />
    </div>
  );
}

export default HeaderText;
