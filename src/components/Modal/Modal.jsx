import React from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import modalStyle from "../Modal/Modal.module.css";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIngredient } from "../../services/IngredientSlice";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const modalRoot = document.getElementById("modal");

export default function Modal({ closeModal, headerModal = "" }) {
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

    const params = useParams();
    const ingredient = useSelector(selectIngredient(params.id));

    console.log();

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
          {ingredient && <IngredientDetails ingredient={ingredient} />}
        </div>
      </div>
      <ModalOverlay closeModal={closeModal} />
    </>,
    modalRoot
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  headerModal: PropTypes.string,
};
