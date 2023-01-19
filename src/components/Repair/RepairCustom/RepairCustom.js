import React from 'react';
import styles from './RepairCustom.module.scss';
import RepairCustomCards from "../RepairCustomCards/RepairCustomCards";
import RepairCustomCardsMobile from "../RepairCustomCardsMobile/RepairCustomCardsMobile";

function RepairCustomBlock({RepairCustom}) {
  return (
    <div className={styles.Content}>
      <div className={styles.Text}>
        {/*<h1 className={hidden}>Мы предлагаем ремонт от А до я</h1>*/}
        <p className={styles.header}>{RepairCustom.offer}</p>
        <p>Цена на комплектующие всегда меняется. Для уточнения актуальной цены выберите поломку, и оставьте заявку</p>
      </div>
      <RepairCustomCards RepairCustomFirst={RepairCustom.FirstPath} RepairCustomSecond={RepairCustom.SecondPath} RepairCustomThird={RepairCustom.ThirdPath}/>
      <RepairCustomCardsMobile RepairCustomFirst={RepairCustom.FirstPath} RepairCustomSecond={RepairCustom.SecondPath} RepairCustomThird={RepairCustom.ThirdPath}/>
    </div>
  )
}

export default RepairCustomBlock;