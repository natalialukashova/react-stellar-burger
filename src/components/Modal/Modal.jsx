import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyle from "../Modal/Modal.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const modalRoot = document.getElementById("modal");

export default function Modal({ closeModal, children, headerModal = "" }) {
  const closeEsc = React.useCallback(
    (evt) => {
      if (evt.key === "Escape") {
        evt.preventDefault();
        closeModal();
      }
    },
    [closeModal]
  );

  React.useEffect(() => {
    document.addEventListener("keydown", closeEsc);
    return () => {
      document.removeEventListener("keydown", closeEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
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
      <ModalOverlay closeModal={closeModal} />
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  children: PropTypes.element,
  closeModal: PropTypes.func,
  headerModal: PropTypes.string,
};
