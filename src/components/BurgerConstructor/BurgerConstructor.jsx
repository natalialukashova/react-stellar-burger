import React from "react";
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

export default function BurgerConstructor({ openModal }) {
  const dispatch = useDispatch();
  const { bun } = useSelector(selectConstructorBuns);
  const { fillings } = useSelector(selectConstructorIngredients);

  function onClick() {
    const childModal = <OrderDetails order={"034536"} />;
    openModal(childModal);
  }

  return (
    <section className={`${constuctorStyle.content} mt-25 ml-4`}>
      {bun.length === 0 && Object.key(fillings).length === 0 ? (
        <p className="text text_type_digits-medium">
          Перетащите ингредиенты и булки для составления бургера
        </p>
      ) : (
        <>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.text}
            price={bun.price}
            thumbnail={bun.image_mobile}
            className="ml-8"
          />

          <div className={`${constuctorStyle.section} mt-4 mb-4 pr-4`}>
            {fillings.map((item, index) => (
              <div
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
              </div>
            ))}
          </div>

          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.text}
            price={bun.price}
            thumbnail={bun.image_mobile}
            className="ml-8"
          />
        </>
      )}

      <div className={`${constuctorStyle.footer} mt-10`}>
        <div className={`${constuctorStyle.price} mr-10`}>
          <p className="text text_type_digits-medium pr-3">610</p>
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
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType),
  openModal: PropTypes.func,
};
