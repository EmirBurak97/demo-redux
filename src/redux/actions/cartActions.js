import * as actionTypes from "./actionTypes";

export function addToCart(cart) {
  return { type: actionTypes.ADD_TO_CART, payload: cart };
}

export function removeFromCart(cart) {
  return { type: actionTypes.REMOVE_FROM_CART, payload: cart };
}
