import React, { ReactElement } from "react";
import overlayStyle from "./ModalOverlay.module.css";
import { TCloseModal } from "../../utils/types";

export default function ModalOverlay({closeModal}: TCloseModal): ReactElement {
  function clickOverlay(): void {
    closeModal();
  }

  return <div className={overlayStyle.overlay} onClick={clickOverlay}></div>;
}