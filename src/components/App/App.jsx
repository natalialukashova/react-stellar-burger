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
import { Routes, Route, useLocation, Outlet, useNavigate } from "react-router-dom";
import { RegistrationPage } from "../../pages/register";
import { LoginPage } from "../../pages/login";
import ForgotPassword from "../../pages/forgot-password";
import { ResetPassword } from "../../pages/reset-password";
import { ProfilePage } from "../../pages/profile";
import { IngredientPage } from "../../pages/ingredient";
import ProtectedRouteElement from "../ProtectedRouteElement/ProtectedRouteElement";

function App() {
  const location = useLocation();

  const [ingredients, setIngredients] = useState([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [headerModal, setheaderModal] = React.useState("");
  const [childModal, setChildModal] = React.useState("");
  const order = useSelector(selectOrder);
  const clickedIngredient = useSelector(selectedIngredient);
  const dispatch = useDispatch();

  const background = location.state && location.state.background;
  const navigate = useNavigate()

  function openModal(modalHeaderName = "", mainModal) {
    setChildModal(mainModal);
    setheaderModal(modalHeaderName);
    setIsModalOpen(true);
  }

  const closeOrderModal = React.useCallback(() => {
    dispatch(clearOrder());
  }, []);

  // const closeIngredientModal = React.useCallback(() => {
  //   dispatch(clearIngredient());
  //   location.state.background = null;
  //   setIsModalOpen(false);
  // });

  const onModalClose = () => navigate(-1);

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  console.log(order);

  return (
    <div className={styles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/profile"
          element={<ProtectedRouteElement element={<ProfilePage />} />}
        />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
      </Routes>
      {order && (
        <Modal headerModal="" closeModal={closeOrderModal}>
          <OrderDetails order={order} />
        </Modal>
      )}
      {background && (
        <Routes>
          <Route
            element={
              <Modal headerModal="" closeModal={onModalClose}>
                <Outlet />
              </Modal>
            }
          >
            <Route path="/ingredients/:id"></Route>
          </Route>
        </Routes>
      )}
    </div>
  );
}

export default App;
