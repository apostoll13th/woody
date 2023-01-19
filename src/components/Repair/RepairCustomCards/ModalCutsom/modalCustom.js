import React from 'react';
import {Button, Modal, ButtonToolbar} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import styles from './modalCustom.module.scss'
import Forms from "../../../ModalComponent/Forms/Forms";




function ModalCustom({card}) {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <ButtonToolbar>
        <Button className={styles.button} size="md" onClick={() => handleOpen('md')}> {card} </Button>
      </ButtonToolbar>
      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header>
        </Modal.Header>
        <Modal.Body className={styles.ModalBody}>
          <h1>Заполните форму заказа ремонта</h1>
          <Forms/>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalCustom;