import React from "react";
import mainStyles from "../Main/Main.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

export default function Main({ data }) {
  return (
    <div className={mainStyles.main}>
      <BurgerIngredients data={data} />
      <BurgerConstructor data={data} />
    </div>
  );
}
