import React from 'react'
import IngredientDetails from '../components/IngredientDetails/IngredientDetails';
import { useSelector } from 'react-redux';
import { selectIngredient } from '../services/IngredientSlice';
import { useParams } from 'react-router-dom';


export function IngredientPage() {
  const params = useParams();
  const ingredient = useSelector(selectIngredient(params.id));

  console.log(ingredient, params)

  if (!ingredient) {
    return null;
  }

  return <IngredientDetails ingredient={ingredient} />;
}
