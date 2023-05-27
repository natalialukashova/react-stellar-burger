import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyle from "../Modal/Modal.module.css";

const modalRoot = document.getElementById("modal");

export default function Modal({ closeModal, children, headerModal = "" }) {
  function closeEsc(evt) {
    if (evt.key === "Escape") {
      evt.preventDefault();
      closeModal();
    }
  }

  function clickOverlay() {
    closeModal();
  }

  React.useEffect(() => {
    document.addEventListener("keydown", closeEsc);
    return () => {
      document.addEventListener("keydown", closeEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className={`${modalStyle.overlay} `} onClick={clickOverlay}>
        <div className={`${modalStyle.modal} `}>
          <div className={modalStyle.main}>
            <div className={modalStyle.header}>
              <h1 className={`${modalStyle.title} text text_type_main-large`}>
                {headerModal}
              </h1>
              <div className={`${modalStyle.icon} `}>
                <CloseIcon type="primary" onClick={closeModal} />
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </>,
    modalRoot
  );
}
