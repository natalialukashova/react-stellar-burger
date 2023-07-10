import React from "react";
import overlayStyle from "./ModalOverlay.module.css";
import PropTypes from 'prop-types'

export default function ModalOverlay({closeModal}) {
  function clickOverlay() {
    closeModal();
  }

  return <div className={overlayStyle.overlay} onClick={clickOverlay}></div>;
}

ModalOverlay.propTypes = {
  closeModal: PropTypes.func,
};