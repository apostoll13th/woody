import React from 'react';
import styles from './RepairCustomCards.module.scss'
import CardCustom from "./CardCustom/CardCustom";
import ModalCustom from "./ModalCutsom/modalCustom";

function RepairCustomCards({RepairCustomFirst, RepairCustomSecond, RepairCustomThird}) {
	let cardItem = RepairCustomFirst.map((card) => <CardCustom key={card.id} img={card.img} text={card.text}/>)
	let cardModal = cardItem.map((card) => <ModalCustom card={card}/>)
	let cardItemSecond = RepairCustomSecond.map((card) => <CardCustom key={card.id} img={card.img} text={card.text}/>)
	let cardModalSecond = cardItemSecond.map((card) => <ModalCustom card={card}/>)
	let cardItemThird = RepairCustomThird.map((card) => <CardCustom key={card.id} img={card.img} text={card.text}/>)
	let cardModalThird = cardItemThird.map((card) => <ModalCustom card={card}/>)


	return (
		<div className={styles.Content}>
			{cardModal}
			{cardModalSecond}
			{cardModalThird}

		</div>

	)
}

export default RepairCustomCards;