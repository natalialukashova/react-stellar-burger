import React, { useMemo, useState } from "react";
import constuctorStyle from "../BurgerConstructor/BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import { ingredientPropType } from "../../utils/prop-types";
import {
  removeFilling,
  selectConstructorIngredients,
  selectConstructorBuns,
} from "../../services/ConstuctorSlice";
import { useDispatch, useSelector } from "react-redux";
import { sendOrder } from "../../services/ConstuctorSlice";
import { useDrop } from "react-dnd";
import { addFilling, setBun } from "../../services/ConstuctorSlice";
import { Reorder } from "framer-motion";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  const bun = useSelector(selectConstructorBuns);
  const fillings = useSelector(selectConstructorIngredients);

  const ingredientsList = fillings.map((item) => item._id);
  ingredientsList.unshift(bun._id);

  function onClick() {
    dispatch(sendOrder(ingredientsList));
  }

  const calculateTotal = (bun, fillings = []) =>
    fillings.reduce((acc, { price }) => {
      acc = acc + price;
      return acc;
    }, bun?.price * 2 ?? 0);

  const totalPrice = React.useMemo(
    () => calculateTotal(bun, fillings),
    [bun, fillings]
  );

  const [, dropBox] = useDrop({
    accept: "ingredient",
    drop: function (item) {
      if (item.type === "bun") {
        dispatch(setBun(item));
      } else {
        dispatch(addFilling(item));
      }
    },
  });

  return (
    <section className={`${constuctorStyle.content} mt-25 ml-4`} ref={dropBox}>
      {Object.keys(bun).length === 0 && fillings.length === 0 ? (
        <>
          <p className="text text_type_main-large mt-10 ml-4">
            Перетащите ингредиенты и булки для составления бургера
          </p>
          <div className={`${constuctorStyle.footer} mt-10`}>
            <div className={`${constuctorStyle.price} mr-10`}>
              <p className="text text_type_digits-medium pr-3">0</p>
              <CurrencyIcon type="primary" />
            </div>
            <Button htmlType="button" type="primary" size="medium" disabled>
              Оформить заказ
            </Button>
          </div>
        </>
      ) : (
        <>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image_mobile}
            className="ml-8"
          />
          <Reorder
            onReorder={(startId, endId) => {
              if (startId > endId) {
                return 1;
              } else {
                return -1;
              }
            }}
          >
            <Reorder.Group
              className={`${constuctorStyle.section} mt-4 mb-4 pr-4`}
              as="div"
              axis="y"
              values={fillings}
            >
              {(item, index) => (
                <Reorder.Item
                  value={item}
                  key={item._id}
                  className={`${constuctorStyle.mainItem} pt-4`}
                >
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.image_mobile}
                    handleClose={() => dispatch(removeFilling(index))}
                  />
                </Reorder.Item>
              )}
            </Reorder.Group>
          </Reorder>

          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image_mobile}
            className="ml-8"
          />

          <div className={`${constuctorStyle.footer} mt-10`}>
            <div className={`${constuctorStyle.price} mr-10`}>
              <p className="text text_type_digits-medium pr-3">{totalPrice}</p>
              <CurrencyIcon type="primary" />
            </div>
            <Button
              htmlType="button"
              type="primary"
              size="medium"
              onClick={onClick}
            >
              Оформить заказ
            </Button>
          </div>
        </>
      )}
    </section>
  );
}

BurgerConstructor.propTypes = {
  openModal: PropTypes.func,
};
