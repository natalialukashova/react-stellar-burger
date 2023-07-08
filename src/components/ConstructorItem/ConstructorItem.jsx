import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFilling,
  setSwitchedFillings,
} from "../../services/ConstuctorSlice";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import constuctorStyle from "../BurgerConstructor/BurgerConstructor.module.css";
import { moveInArray } from "../../utils/moveInArray";
import { selectConstructorIngredients } from "../../services/ConstuctorSlice";

function ConstructorItem({ item, index }) {
  const dispatch = useDispatch();
  const fillings = useSelector(selectConstructorIngredients);
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: index,
      };
    },
    drop(item) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const dropIndex = index;

      if (dragIndex === dropIndex) {
        return;
      }

      const newFillings = moveInArray([...fillings], dragIndex, dropIndex);
      dispatch(setSwitchedFillings(newFillings));
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "card",
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  return (
    <li
      key={index._id}
      className={`${constuctorStyle.mainItem} pt-4`}
      ref={ref}
      data-handler-id={handlerId}
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

export default React.memo(ConstructorItem);
