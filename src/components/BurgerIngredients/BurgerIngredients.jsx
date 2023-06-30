import React, { useEffect, useRef } from "react";
import ingredientStyles from "../BurgerIngredients/BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../IngredientCard/IngredientCard";
import { data } from "../../utils/data";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  loadIngredients,
  selectIngredients,
} from "../../services/IngredientSlice";

export default function BurgerIngredients({ openModal }) {
  const [current, setCurrent] = React.useState();
  const dispatch = useDispatch();
  const { items, loading } = useSelector(selectIngredients);
  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const mainsRef = useRef(null);

  const buns = items.filter((item) => item.type === "bun");
  const sauces = items.filter((item) => item.type === "sauce");
  const main = items.filter((item) => item.type === "main");

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  function scrollToBuns() {
    setCurrent();
    bunsRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToSauces() {
    setCurrent();
    saucesRef.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToMains() {
    setCurrent();
    mainsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className={`${ingredientStyles.ingredients} ml-4`}>
      <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
      <div className={`${ingredientStyles.tab} mt-5`}>
        <Tab value="bun" active={current === "bun"} onClick={scrollToBuns}>
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={scrollToSauces}
        >
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={scrollToMains}>
          Начинки
        </Tab>
      </div>
      <section className={ingredientStyles.section}>
        {loading ? (
          <p className="text text_type_main-medium mt-4">
            Ингредиенты загружаются...
          </p>
        ) : (
          <>
            <h3 className="text text_type_main-medium mb-6 mt-10" ref={bunsRef}>
              Булки
            </h3>
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

            <h3
              className="text text_type_main-medium mb-6 mt-10"
              ref={saucesRef}
            >
              Соусы
            </h3>
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

            <h3
              className="text text_type_main-medium mb-6 mt-10"
              ref={mainsRef}
            >
              Начинки
            </h3>
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
