import React from "react";
import styles from "./App.module.css";
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
import { loadIngredients } from "../../services/IngredientSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RegistrationPage } from "../../pages/register";
import { LoginPage } from "../../pages/login";
import ForgotPassword from "../../pages/forgot-password";
import { ResetPassword } from "../../pages/reset-password";
import { ProvideAuth } from "../../utils/auth";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [headerModal, setheaderModal] = React.useState("");
  const [childModal, setChildModal] = React.useState("");
  const order = useSelector(selectOrder);
  const clickedIngredient = useSelector(selectedIngredient);
  const dispatch = useDispatch();

  function openModal(modalHeaderName = "", mainModal) {
    setChildModal(mainModal);
    setheaderModal(modalHeaderName);
    setIsModalOpen(true);
  }

  const closeOrderModal = React.useCallback(() => {
    dispatch(clearOrder());
  }, []);

  const closeIngredientModal = React.useCallback(() => {
    dispatch(clearIngredient());
  });

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  return (
    <ProvideAuth>
      <BrowserRouter>
        <div className={styles.app}>
          <AppHeader />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
          {order && (
            <Modal headerModal="" closeModal={closeOrderModal}>
              <OrderDetails order={order} />
            </Modal>
          )}
          {clickedIngredient && (
            <Modal headerModal="" closeModal={closeIngredientModal}>
              <IngredientDetails ingredient={clickedIngredient} />
            </Modal>
          )}
        </div>
      </BrowserRouter>
    </ProvideAuth>
  );
}

export default App;
