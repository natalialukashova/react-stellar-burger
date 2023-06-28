import React, { useEffect } from "react";
import ingredientStyles from "../BurgerIngredients/BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../IngredientCard/IngredientCard";
import { data } from "../../utils/data";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  addToConstructor,
  loadIngredients,
  removeFromConstructor,
  selectIngredients,
} from "../../services/BurgerSlice";

export default function BurgerIngredients({ openModal }) {
  const [current, setCurrent] = React.useState();

  const dispatch = useDispatch();
  const { items, loading } = useSelector(selectIngredients);
  const buns = items.filter((item) => item.type === "bun");
  const sauces = items.filter((item) => item.type === "sauce");
  const main = items.filter((item) => item.type === "main");

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  return (
    <div className={`${ingredientStyles.ingredients} ml-4`}>
      <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
      <div className={`${ingredientStyles.tab} mt-5`}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <section className={ingredientStyles.section}>
        {loading ? (
          <p className="text text_type_main-medium mt-4">Ингредиенты загружаются...</p>
        ) : (
          <>
            <h3 className="text text_type_main-medium mb-6 mt-10">Булки</h3>
            <div className={ingredientStyles.cardList}>
              {buns.map((item) => (
                <IngredientCard
                  {...item}
                  item={item}
                  key={item._id}
                  openModal={openModal}
                />
              ))}
            </div>

            <h3 className="text text_type_main-medium mb-6 mt-10">Соусы</h3>
            <div className={ingredientStyles.cardList}>
              {sauces.map((item) => (
                <IngredientCard
                  {...item}
                  item={item}
                  key={item._id}
                  openModal={openModal}
                />
              ))}
            </div>

            <h3 className="text text_type_main-medium mb-6 mt-10">Начинки</h3>
            <div className={ingredientStyles.cardList}>
              {main.map((item) => (
                <IngredientCard
                  {...item}
                  item={item}
                  key={item._id}
                  openModal={openModal}
                />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType),
  openModal: PropTypes.func,
};
