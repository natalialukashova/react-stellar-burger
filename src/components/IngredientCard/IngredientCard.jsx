import React from "react";
import cardStyle from "../IngredientCard/IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";

export default function IngredientCard({
  id,
  name,
  price,
  image,
  openModal,
  onClick,
  ...props
}) {
  // function onClick() {
  //   const childModal = <IngredientDetails name={name} {...props} />;
  //   openModal("", childModal); 
  // }
  // закрыть модалку, по клику добавлять в конструктор

  return (
    <div className={`${cardStyle.card} mb-8`} onClick={onClick}>
      <img src={image} alt={name} />
      <div className={`${cardStyle.price} mt-1`}>
        <p className="text text_type_main-default">{price}</p>
        <CurrencyIcon />
      </div>
      <p className={`${cardStyle.name} text text_type_main-default mt-1`}>
        {name}
      </p>
      <Counter />
    </div>
  );
}

IngredientCard.propTypes = {
  item: ingredientPropType,
  openModal: PropTypes.func,
};
