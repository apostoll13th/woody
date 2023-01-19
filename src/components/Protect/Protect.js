import React from "react";
import styles from "./Protect.module.scss";
import Card from "./ProtectCard/ProtectCard";
import SwiperComponentProtect from "../Swiper/SwiperComponentProtect/SwiperComponentProtect";
import ModalComponent from "../ModalComponent/ModalComponent";

function Protect({ ProtectCards }) {
  console.log(Array.isArray(ProtectCards.first));
  let cardProtect = ProtectCards.map((card) => (
    <Card key={card.id} img={card.img} />
  ));
  return (
    <div className={styles.Protect}>
      <div className={styles.Text}>
        <h2 className="hidden">Защитная антигравийная бронепленка</h2>
        <p className={styles.protectHeader}>
          Защитите гаджет бронеплёнкой, и носите его без чехла
        </p>
        <p>
          Оклеим любое ваше устройство в защитную полиуретановую или текстурную
          плёнку. Оклеиваем телефоны, планшеты, ноутбуки, часы, наушники,
          приставки и… даже айкосы!
        </p>
        <h4>
          Оставьте заявку и получите скидку 15% на <span>любую</span> услугу
        </h4>
        <ModalComponent
          textBtn={"Оставить заявку"}
          body={"Заполните форму заказа ремонта"}
        />
      </div>
      <div className={styles.Slider}>{cardProtect}</div>
      <div className={styles.SliderMob}>
        <SwiperComponentProtect ProtectCards={ProtectCards} />
      </div>
    </div>
  );
}

export default Protect;
