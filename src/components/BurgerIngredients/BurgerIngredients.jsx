import React from "react";
import ingredientStyles from "../BurgerIngredients/BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../IngredientCard/IngredientCard";
import { data } from "../../utils/data";

export default function BurgerIngredients() {
  const [current, setCurrent] = React.useState("bun");
  const buns = data.filter((item) => item.type === "bun");
  const sauces = data.filter((item) => item.type === "sauce");
  const main = data.filter((item) => item.type === "main");

  return (
    <div className={ingredientStyles.ingredients}>
      <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
      <div className={`${ingredientStyles.tab} mt-5`}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>
      <section>
        <h3 className="text text_type_main-medium">Булки</h3>
        <div>
          {buns.map((item) => (
            <IngredientCard item={item} />
          ))}
        </div>

        <h3 className="text text_type_main-medium">Соусы</h3>
        <div>
        {sauces.map((item) => (
            <IngredientCard item={item} />
          ))}
        </div>

        <h3 className="text text_type_main-medium">Начинки</h3>
        <div>
        {main.map((item) => (
            <IngredientCard item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
