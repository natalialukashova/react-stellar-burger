import React from 'react'
import IngredientDetails from '../components/IngredientDetails/IngredientDetails';
import { useSelector } from 'react-redux';
import { selectIngredient } from '../services/IngredientSlice';
import { useParams } from 'react-router-dom';
import style from "./ingredient.module.css"

export function IngredientPage() {
  const params = useParams();
  const ingredient = useSelector(selectIngredient(params.id));

  console.log(params)

  if (!ingredient) {
    return null;
  }

  return (
    <div className={style.ingredient}>
      <IngredientDetails ingredient={ingredient} />
    </div>
  );
}
