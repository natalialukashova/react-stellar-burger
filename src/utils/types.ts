import { ReactElement } from "react";

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

export interface IIngredient {
  _id: string;
  type: string;
};

export type TElement = {
  element: ReactElement;
};

export type TOrder = {
  order: {
    name: string;
    order: {
      number: number;
    };
    success: boolean;
  };
};

export type TCloseModal = {
    closeModal: () => {};
}

export type TModal = {
  closeModal: () => {};
  children: ReactElement;
  headerModal: string;
};

export type TConstructor = {
  item: {
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
  index: {
    index: number;
    _id: number;
  };
};