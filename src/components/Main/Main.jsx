import React from "react";
import mainStyles from "../Main/Main.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

export default function Main({ data, openModal }) {
  return (
    <div className={mainStyles.main}>
      <BurgerIngredients data={data} openModal={openModal} />
      <BurgerConstructor data={data} openModal={openModal} />
    </div>
  );
}
