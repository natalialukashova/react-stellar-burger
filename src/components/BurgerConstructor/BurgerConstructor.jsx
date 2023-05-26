import React from "react";
import constuctorStyle from "../BurgerConstructor/BurgerConstructor.module.css";
import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export default function BurgerConstructor({ data }) {
  const bunBurger = data.find((item) => item.type === "bun");
  const withoutBuns = data.filter((item) => {
    if (item.type === "main" && item.type === "sauces") {
      return item;
    }
  });

  return (
    <div className="mt-25 ml-4">
      <ConstructorElement
        type="top"
        isLocked={true}
        text="Краторная булка N-200i (верх)"
        price={200}
        thumbnail={bunBurger.image_mobile}
      />

      <div className="mt-4 mb-4 pr-4">
        {withoutBuns.map((item) => (
          <div key={item._id} className="pt-4">
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
      />
      <div className="mt-10">
        <div className="mr-10">
          <p className="text text_type_digits-medium pr-3">610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}
