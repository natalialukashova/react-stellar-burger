import React, { useEffect, useRef } from "react";
import ingredientStyles from "../BurgerIngredients/BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import IngredientCard from "../IngredientCard/IngredientCard";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  loadIngredients,
  selectIngredients,
} from "../../services/IngredientSlice";
import { useInView } from "react-intersection-observer";

export default function BurgerIngredients() {
  const [current, setCurrent] = React.useState("bun");
  const dispatch = useDispatch();
  const { items, loading } = useSelector(selectIngredients);
  const bunsRef = useRef(null);
  const saucesRef = useRef(null);
  const mainsRef = useRef(null);
  const baseRef = useRef()

  const buns = items.filter((item) => item.type === "bun");
  const sauces = items.filter((item) => item.type === "sauce");
  const main = items.filter((item) => item.type === "main");

  useEffect(() => {
    dispatch(loadIngredients());
  }, []);

  const { bunsWatchRef, inViewBuns } = useInView({
    threshold: 0.5,
    root: baseRef.current,
  });

  const { saucesWatchRef, inVievSauces } = useInView({
    threshold: 1,
    root: baseRef.current,
  });

  const { mainsWatchRef, inViewMain } = useInView({
    threshold: 1,
    root: baseRef.current,
  });

  console.log(inViewMain);

  return (
    <div className={`${ingredientStyles.ingredients} ml-4`}>
      <h2 className="text text_type_main-large mt-10">Соберите бургер</h2>
      <div className={`${ingredientStyles.tab} mt-5`}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={() => {
            setCurrent("bun");
            bunsRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={() => {
            setCurrent("sauce");
            saucesRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={inViewMain ? current === 'main' : null}
          onClick={() => {
            setCurrent("main");
            mainsRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Начинки
        </Tab>
      </div>
      <section className={ingredientStyles.section} ref={baseRef}>
        {loading ? (
          <p className="text text_type_main-medium mt-4">
            Ингредиенты загружаются...
          </p>
        ) : (
          <>
            <h3 className="text text_type_main-medium mb-6 mt-10" ref={bunsRef}>
              Булки
            </h3>
            <div className={ingredientStyles.cardList} ref={bunsWatchRef}>
              {buns.map((item) => (
                <IngredientCard key={item._id} ingredient={item} />
              ))}
            </div>

            <h3
              className="text text_type_main-medium mb-6 mt-10"
              ref={saucesRef}
            >
              Соусы
            </h3>
            <div className={ingredientStyles.cardList} ref={saucesWatchRef}>
              {sauces.map((item) => (
                <IngredientCard key={item._id} ingredient={item} />
              ))}
            </div>

            <h3
              className="text text_type_main-medium mb-6 mt-10"
              ref={mainsRef}
            >
              Начинки
            </h3>
            <div className={ingredientStyles.cardList} ref={mainsWatchRef}>
              {main.map((item) => (
                <IngredientCard key={item._id} ingredient={item} />
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
