import React from "react";
import styles from "./Repair.module.scss";
import CardRepair from "../CardRepair/CardRepair";

function Repair({ RepairInfo }) {
  let cardRepair = RepairInfo.map((data) => (
    <CardRepair
      key={data.id}
      header={data.header}
      text={data.text}
      img={data.img}
    />
  ));
  return (
    <div className={styles.CardRepairs}>
      <div className={styles.CardsHeader}>
        <p className="sectionHeader" style={{ padding: 0 }}>
          Ремонтируем всё — от Патифона до Айфона
        </p>
        <p>
          За 9 лет научились ремонтировать 95% всех возможных поломок у 90%
          видов техники{" "}
        </p>
      </div>
      <div className={styles.CardsMain}>{cardRepair}</div>
    </div>
  );
}

export default Repair;
