import React from "react";
import styles from "./app.module.css";
import { data } from "../../utils/data";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import { useEffect, useState } from "react";
import { api, config } from "../../Api/Api";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectOrder } from "../../services/ConstuctorSlice";
import OrderDetails from "../OrderDetails/OrderDetails";
import { clearOrder } from "../../services/ConstuctorSlice";
import { selectedIngredient } from "../../services/IngredientSlice";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { clearIngredient } from "../../services/IngredientSlice";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [headerModal, setheaderModal] = React.useState("");
  const [childModal, setChildModal] = React.useState("");
  const order = useSelector(selectOrder);
  const clickedIngredient = useSelector(selectedIngredient)
  const dispatch = useDispatch();

  function openModal(modalHeaderName = "", mainModal) {
    setChildModal(mainModal);
    setheaderModal(modalHeaderName);
    setIsModalOpen(true);
  }

  const closeOrderModal = React.useCallback(() => {
    dispatch(clearOrder())
  }, []);

  const closeIngredientModal = React.useCallback(() => {
    dispatch(clearIngredient())
  })

  useEffect(() => {
    api
      .getIngredients()
      .then((data) => {
        setIngredients(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Main data={data} openModal={openModal} />
      {order && (
        <Modal headerModal="" closeModal={closeOrderModal}>
          <OrderDetails order={order} />
        </Modal>
      )}
      {clickedIngredient && (
        <Modal headerModal="" closeModal={closeIngredientModal} >
          <IngredientDetails ingredient={clickedIngredient}  />
        </Modal>
      )}
    </div>
  );
}

export default App;
