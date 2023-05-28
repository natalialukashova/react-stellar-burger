import React from 'react'
import overlayStyle from './ModalOverlay.module.css';
import Modal from '../Modal/Modal';

export default function ModalOverlay({closeModal}) {
   function clickOverlay() {
      closeModal();
    }

  return (
    <div className={overlayStyle.overlay}  onClick={clickOverlay}>
      <Modal />
    </div>
  )
}
