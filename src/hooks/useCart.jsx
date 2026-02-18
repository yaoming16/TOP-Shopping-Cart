import { useContext, useMemo } from "react";

import { CartContext } from "../contexts/cartContext";

import { findItemById } from "../utils/utils";

function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");

  const { cart, dispatch } = context;

  function calculateTotals() {
    let totalPrice = 0;
    let totalItems = 0;
    for (let item of cart.items) {
      totalPrice += item.price * item.quantity;
      totalItems += item.quantity;
    }
    return { totalPrice: totalPrice, totalItems };
  }

  //Add items to the cart
  function addItem(itemInfo, quantity = 1) {
    let formatedData = {
      id: itemInfo.id,
      title: itemInfo.title,
      price: itemInfo.price,
      thumbnail: itemInfo.thumbnail,
    };
    dispatch({ type: "ADD_ITEM", payload: formatedData, quantity: quantity });
  }

  //Find an item by the id. If in the cart return the item info otherwise return null
  function findById(id) {
    return findItemById(cart.items, id);
  }

  function removeItem(itemInfo) {
    dispatch({type: "REMOVE_ITEM", payload: itemInfo})
  }

  function setItemQuantity(itemInfo, newQuantity) {
    dispatch({type: "SET_QUANTITY", payload: itemInfo, quantity: newQuantity})
  }

  return {
    // State
    items: cart.items,

    //Actions
    addItem,
    removeItem,
    findById,
    calculateTotals,
    setItemQuantity,
  };
}

export default useCart;
