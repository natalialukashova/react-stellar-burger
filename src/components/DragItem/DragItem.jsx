import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import { removeFilling } from "../../services/ConstuctorSlice";
import {
   ConstructorElement,
   DragIcon,
 } from "@ya.praktikum/react-developer-burger-ui-components";
 import constuctorStyle from "../BurgerConstructor/BurgerConstructor.module.css";

export default function DragItem({item, index}) {
  const dispatch = useDispatch();

  const [, dragItem] = useDrag({
    type: "item",
    item: item,
  });

  return (
    <li
      key={item._id}
      className={`${constuctorStyle.mainItem} pt-4`}
      ref={dragItem}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={item.name}
        price={item.price}
        thumbnail={item.image_mobile}
        handleClose={() => dispatch(removeFilling(index))}
      />
    </li>
  );
}
