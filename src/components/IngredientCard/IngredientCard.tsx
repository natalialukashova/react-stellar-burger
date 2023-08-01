import React, { ReactElement } from "react";
import cardStyle from "../IngredientCard/IngredientCard.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectConstructorBuns,
  selectConstructorIngredients,
} from "../../services/ConstuctorSlice";
import { useDrag } from "react-dnd";
import { useLocation, Link } from "react-router-dom";
import { TIngredient } from "../../utils/types";

export default function IngredientCard({
  ingredient,
}: TIngredient): ReactElement {
  const dispatch = useDispatch();
  const {
    image,
    name,
    price,
  }: {
    _id: string;
    name: string;
    price: number;
    type: string;
    calories: number;
    carbohydrates: number;
    fat: number;
    proteins: number;
    image: string;
    image_large: string;
    image_mobile: string;
    __v: number;
    uuid?: string | undefined;
    index?: number | undefined;
  } = ingredient;

  const location = useLocation();
  const background = location.state && location.state.background;

  const bun = useSelector(selectConstructorBuns);
  const fillings = useSelector(selectConstructorIngredients);

  const count = (ingredient: { type: string; _id: number }) => {
    if (ingredient.type === "bun") {
      return ingredient._id === bun._id ? 2 : 0;
    }
    return fillings.filter(
      (item: { type: string; _id: number }) => item._id === ingredient._id
    ).length;
  };

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: ingredient,
  });

  return (
    <Link
      to={`/ingredients/${ingredient._id}`}
      state={{ background: location }}
      ref={dragRef}
      className={`${cardStyle.card} mb-8`}
    >
      <img src={image} alt={name} />
      <div className={`${cardStyle.price} mt-1`}>
        <p className="text text_type_main-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${cardStyle.name} text text_type_main-default mt-1`}>
        {name}
      </p>
      <Counter count={count(ingredient)} />
    </Link>
  );
}
