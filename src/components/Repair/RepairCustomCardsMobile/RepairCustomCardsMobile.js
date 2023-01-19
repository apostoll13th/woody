import React from 'react';
import styles from './RepairCustomCardsMobile.module.scss'
import CardCustom from "../RepairCustomCards/CardCustom/CardCustom";
import {Autoplay, Grid, Pagination} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import ModalCustom from "../RepairCustomCards/ModalCutsom/modalCustom";


function RepairCustomCardsMobile({RepairCustomFirst,RepairCustomSecond, RepairCustomThird}) {
  let cardItem = RepairCustomFirst.map((card) => <CardCustom key={card.id} img={card.img} text={card.text}/>)
  let cardItemTwo = RepairCustomSecond.map((card) => <CardCustom key={card.id} img={card.img} text={card.text}/>)
  let cardItemThree = RepairCustomThird.map((card) => <CardCustom key={card.id} img={card.img} text={card.text}/>)
  let cardModal = cardItem.map((card) => <ModalCustom card={card}/>)
  let cardModalSecond = cardItemTwo.map((card) => <ModalCustom card={card} />)
  let cardModalThird = cardItemThree.map((card) => <ModalCustom card={card} />)
  return (
    <div className={styles.Content}>
      <Swiper className="abc"
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              autoplay={{delay : 3000}} // 3с
      >
        <SwiperSlide className={styles.ContentCards}  >{cardModal}</SwiperSlide>
        <SwiperSlide className={styles.ContentCards}  >{cardModalSecond}</SwiperSlide>
        <SwiperSlide className={styles.ContentCards}  >{cardModalThird}</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default RepairCustomCardsMobile;