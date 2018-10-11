import { FETCH_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART } from "./types";
import products from "../products";

export const fetchProducts = () => dispatch => {
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products
  });
};

export const addToCart = product => dispatch => {
  const productsClone = [...products];
  const index = productsClone.indexOf(product);
  productsClone[index].inCart++;
  dispatch({
    type: ADD_TO_CART,
    payload: productsClone
  });
};

export const removeFromCart = product => dispatch => {
  const productsClone = [...products];
  const index = productsClone.indexOf(product);
  productsClone[index].inCart--;
  dispatch({
    type: REMOVE_FROM_CART,
    payload: productsClone
  });
};
