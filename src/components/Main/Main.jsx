import React from 'react';
import mainStyles from '../Main/Main.module.css';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';

export default function Main({data}) {
  return (
    <div className={mainStyles.main}>
      <BurgerIngredients data={data} />
    </div>
  )
}
