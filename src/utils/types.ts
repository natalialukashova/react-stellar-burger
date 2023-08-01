export type TIngredient = {
  ingredient: {
    _id: string;
    name: string;
    price: number;
    type: string;
    calories: number;
    carbohydrates: number;
    fat: number;
    proteins: number;
    image: string;
    image_large: string;
    image_mobile: string;
    __v: number;
    uuid?: string;
    index?: number;
  };
};
