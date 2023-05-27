import React from "react";
import cardStyle from "../IngredientCard/IngredientCard.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export default function IngredientCard({item, openModal}) {
  return (
    <div className={`${cardStyle.card} mb-8`} onClick={openModal}>
      <img src={item.image} alt={item.name} />
      <div className={`${cardStyle.price} mt-1`}>
        <p className="text text_type_main-default">{item.price}</p>
        <CurrencyIcon />
      </div>
      <p className={`${cardStyle.name} text text_type_main-default mt-1`}>{item.name}</p>
      <Counter />
    </div>
  );
}
