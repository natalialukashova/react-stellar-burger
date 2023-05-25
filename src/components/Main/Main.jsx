import React from 'react';
import mainStyles from '../Main/Main.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

export default function Main() {
  return (
    <div className={mainStyles.main}>
      <BurgerIngredients />
    </div>
  )
}
