import React from "react";
import mainStyles from "../Main/Main.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import PropTypes from "prop-types";
import { ingredientPropType } from '../../utils/prop-types'

function Main({ data, openModal }) {
  return (
    <div className={mainStyles.main}>
      <BurgerIngredients data={data} openModal={openModal} />
      <BurgerConstructor data={data} openModal={openModal} />
    </div>
  );
}

export default React.memo(Main);

Main.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType),
  openModal: PropTypes.func,
}