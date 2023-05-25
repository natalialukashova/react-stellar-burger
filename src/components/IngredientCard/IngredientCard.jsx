import React from "react";
import cardStyle from "../IngredientCard/IngredientCard.module.css";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

export default function IngredientCard({item}) {
  return (
    <div className={cardStyle.card}>
      <img src={item.image} alt={item.name} />
      <div>
        <p className="text text_type_main-default">{item.price}</p>
        <CurrencyIcon />
      </div>
      <p className="text text_type_main-default">{item.name}</p>
      <Counter />
    </div>
  );
}
