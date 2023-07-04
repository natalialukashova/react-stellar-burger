import React from "react";
import detailsStyle from "../IngredientDetails/IngredientDetails.module.css";
import { ingredientPropType } from "../../utils/prop-types";

export default function IngredientDetails({ ingredient: {
  name,
  image_large,
  calories,
  proteins,
  fat,
  carbohydrates,
}}) {
  return (
    <div className={detailsStyle.section}>
      <p className="text text_type_main-large">Детали ингредиента</p>
      <img
        src={image_large}
        alt={name}
        className={`${detailsStyle.image} mr-5 ml-5`}
      />
      <p className={`${detailsStyle.name} text text_type_main-medium mt-4`}>
        {name}
      </p>

      <div className={`${detailsStyle.info} text text_type_main-medium mt-4`}>
        <div className={`${detailsStyle.detail} text_color_inactive`}>
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default">{calories}</p>
        </div>
        <div className={`${detailsStyle.detail} text_color_inactive`}>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">{proteins}</p>
        </div>
        <div className={`${detailsStyle.detail} text_color_inactive`}>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">{fat}</p>
        </div>
        <div className={`${detailsStyle.detail} text_color_inactive`}>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default">{carbohydrates}</p>
        </div>
      </div>
    </div>
  );
}

IngredientDetails.propTypes = {
  item: ingredientPropType,
};
