import React, { ReactElement } from "react";
import orderStyles from "../OrderDetails/OrderDetails.module.css";
import done from "../../images/done.svg";
import { TOrder } from "../../utils/types";

export default function OrderDetails({order}: TOrder): ReactElement {
  const orderNumber = order.order.number;
  const name = order.name;
  console.log(order)

  return (
    <div className={`${orderStyles.section} `}>
      <p className={`${orderStyles.number} text_type_digits-large `}>{orderNumber}</p>
      <p className={`${orderStyles.name} text text_type_main-medium mt-8`}>{name}</p>
      <img src={done} className={`${orderStyles.done}  mt-15`}></img>
      <p className="text text_type_main-default mt-15">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mt-2 mb-15">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}
