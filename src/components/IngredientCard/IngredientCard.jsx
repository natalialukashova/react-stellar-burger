import React from "react";
import cardStyle from "../IngredientCard/IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  selectConstructorBuns,
  selectConstructorIngredients,
} from "../../services/ConstuctorSlice";
import { clickIngredient } from "../../services/IngredientSlice";
import { useDrag } from "react-dnd";

export default function IngredientCard({ingredient}) {
  const dispatch = useDispatch();
  const { image, name, price } = ingredient;

  function onClick() {
    dispatch(clickIngredient(ingredient));
  }

  const bun = useSelector(selectConstructorBuns);
  const fillings = useSelector(selectConstructorIngredients);

  const count = (ingredient) => {
    if (ingredient.type === "bun") {
      return ingredient._id === bun._id ? 2 : 0;
    }
    return fillings.filter((item) => item._id === ingredient._id).length;
  };

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
  });

  return (
    <div className={`${cardStyle.card} mb-8`} onClick={onClick} ref={dragRef}>
      <img src={image} alt={name} />
      <div className={`${cardStyle.price} mt-1`}>
        <p className="text text_type_main-default">{price}</p>
        <CurrencyIcon />
      </div>
      <p className={`${cardStyle.name} text text_type_main-default mt-1`}>
        {name}
      </p>
      <Counter count={count(ingredient)} />
    </div>
  );
}

IngredientCard.propTypes = {
  openModal: PropTypes.func,
};
