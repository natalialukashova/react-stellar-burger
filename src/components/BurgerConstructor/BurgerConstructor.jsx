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
import { ingredientPropType } from '../../utils/prop-types'

export default function BurgerConstructor({ data, openModal }) {
  const bunBurger = data.find((item) => item.type === "bun");
  const withoutBuns = data.filter((item) => item.type !== "bun");

  function onClick() {
    const childModal = <OrderDetails order={"034536"} />;
    openModal(childModal);
  }

  return (
    <section className={`${constuctorStyle.content} mt-25 ml-4`}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={bunBurger.image_mobile}
        className="ml-8"
      />

      <div className={`${constuctorStyle.section} mt-4 mb-4 pr-4`}>
        {withoutBuns.map((item) => (
          <div key={item._id} className={`${constuctorStyle.mainItem} pt-4`}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image_mobile}
            />
          </div>
        ))}
      </div>

      <ConstructorElement
        type="bottom"
        isLocked={true}
        text="Краторная булка N-200i (низ)"
        price={200}
        thumbnail={bunBurger.image_mobile}
        className="ml-8"
      />
      <div className={`${constuctorStyle.footer} mt-10`}>
        <div className={`${constuctorStyle.price} mr-10`}>
          <p className="text text_type_digits-medium pr-3">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium" onClick={onClick}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientPropType),
  openModal: PropTypes.func,
}